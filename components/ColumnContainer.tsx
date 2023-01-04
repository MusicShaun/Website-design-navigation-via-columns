import styled from 'styled-components';
import Column from "./Column";
import { COLORS } from '../constants/colors';
import { useGlobalContext } from '../globalContexts/index';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setContentPosition } from '../features/contentPositionSlice';
import { pageTurnChange } from '../features/pageTurnSlice';
import { setHome, setPage, setColumnOneTrue , setColumnTwoTrue, setColumnThreeTrue } from '../features/columnPosition'

export default function ColumnContainer() { 

  const dispatch = useAppDispatch();
  const columnPositionSelector = useAppSelector(state => state.columnPosition.value)
  const TRANSITION_TIME = 520
  const { setPageLoading, columnWidth } = useGlobalContext();

  
  const textTransition = (delay: number) => { // VARIABLE DELAY TIMER
    setPageLoading(true)
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, delay)
    return () => clearTimeout(timer)
  }
  

  function handleColumnOneClick() { //* BLUE
    dispatch(setColumnOneTrue())
    if (columnPositionSelector.columnOnePosition !== '0') {// move left
      dispatch(pageTurnChange('/page2'))
      const timer1 = setTimeout(() => {
        dispatch(setPage({columnTwoPosition: 'auto'}))
        dispatch(setContentPosition(columnWidth))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer1)
    } else {           // move right
      dispatch(pageTurnChange('/page3'))
      const timer2 = setTimeout(() => {
        dispatch(setPage({columnOnePosition: 'auto'}))
        dispatch(setContentPosition(0))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer2)
    } 
  }


  function handleColumnTwoClick() { //* ORANGE
    dispatch(setColumnTwoTrue())
    if (columnPositionSelector.columnTwoPosition === '0' && columnPositionSelector.columnOnePosition === '0') { // move right
      dispatch(pageTurnChange('/page2'))
      const timer1 = setTimeout(() => {
        dispatch(setPage({columnTwoPosition: 'auto'}))
        dispatch(setContentPosition(columnWidth))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer1)
    } else {              // move left
      dispatch(pageTurnChange('/page1'))
      const timer2 = setTimeout(() => {
        dispatch(setPage({columnThreePosition: 'auto'}))
        dispatch(setContentPosition(columnWidth * 2))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer2)
    }
  }


  function handleColumnThreeClick() { //* YELLOW
    dispatch(setColumnThreeTrue())
    if (columnPositionSelector.columnThreePosition === '0' && columnPositionSelector.columnTwoPosition === '0' && columnPositionSelector.columnOnePosition === '0') { // move right
      dispatch(pageTurnChange('/page1'))
      const timer1 = setTimeout(() => {
        dispatch(setPage({columnThreePosition: 'auto'}))
        dispatch(setContentPosition(columnWidth * 2))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer1)
    } else {              // move left
      dispatch(pageTurnChange('/'))
      const timer2 = setTimeout(() => {
        dispatch(setHome())
        dispatch(setContentPosition(columnWidth * 3))
      }, TRANSITION_TIME)
      return () => clearTimeout(timer2)
    }
  }


  return (

    <Columns style={{
      height: `100%`,
      width: `100%`,
    }}>

        <Column
          click={() => {handleColumnOneClick(); textTransition(1000)}}
          flexing={columnPositionSelector.columnOneBooly}
          margining={columnPositionSelector.columnOnePosition}
          color={COLORS.ONE}
          text='Page3'
          name='one'
          navigateTo='one'
        />

        <Column
          click={() => {handleColumnTwoClick(); textTransition(1000)}}
          flexing={columnPositionSelector.columnTwoBooly}
          margining={columnPositionSelector.columnTwoPosition}
          color={COLORS.TWO}
          text='Page2'
          name='two'
          navigateTo='two'
        />

        <Column
          click={() => {handleColumnThreeClick(); textTransition(1000)}}
          flexing={columnPositionSelector.columnThreeBooly}
          margining={columnPositionSelector.columnThreePosition}
          color={COLORS.THREE}
          text='Page1'
          name='three'
          navigateTo='three'
          />
    </Columns>

  )
}

const Columns = styled.div`
  position: fixed;
  display: flex;
  padding: 0; 
`;
