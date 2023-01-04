import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useGlobalContext } from '../globalContexts/index';
import { useWindowSize } from 'usehooks-ts';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import EmptyPagesExample from '../components/EmptyPagesExample';
import { setContentPosition } from '../features/contentPositionSlice';
import { setPage } from '../features/columnPosition';

export default function page1() {
  const { height } = useWindowSize()
  const { columnWidth } = useGlobalContext()

  const dispatch = useAppDispatch()
  const contentPositionSelector = useAppSelector(state => state.contentPosition.value);
  const columnPositionSelector = useAppSelector(state => state.columnPosition.value)

  const [ avoidPreLoad, setAvoidPreLoad ] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAvoidPreLoad(false)
    }, 1000)
    return () => clearTimeout(timer)
  })

  useLayoutEffect(() => {
    dispatch(setContentPosition(columnWidth * 1))
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
    if (columnPositionSelector.columnTwoPosition !== 'auto') {
      dispatch(setPage({ columnTwoPosition: 'auto' }))
    }
  }, 520)
  return () => clearTimeout(timer)
  }, [])

  const displayChecks = () => {
    return avoidPreLoad || columnPositionSelector.columnTwoBooly
    || columnPositionSelector.columnOneBooly
    || columnPositionSelector.columnThreeBooly 
  }

  return (
    <div style={{
      position: 'relative',
      display: displayChecks() ? 'none' : 'flex',
      width: `${100 - columnWidth * 3}%`,
      minHeight: `${height}px`,
      height: '300%',
      marginLeft: `${contentPositionSelector}%`,
      backgroundColor: `transparent`,
    }}
    >
      <EmptyPagesExample />
    </div>
  )
}
