import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { useGlobalContext } from '../globalContexts'
import { useEffect, useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useAppSelector } from '../app/hooks';

export default function Header() {

  const { pageLoading, columnWidth } = useGlobalContext();
  const [windowLoad, setWindowLoad] = useState(false)
  const [ avoidPreLoad, setAvoidPreLoad ] = useState(true)
  const scrollDirection = useScrollDirection();
  
  const contentPositionSelector = useAppSelector(state => state.contentPosition.value);


  useEffect(() => { // on page load, header animates in 
    setWindowLoad(true)
    const timer = setTimeout(() => {
      setWindowLoad(false)
    }, 650)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAvoidPreLoad(false)
    }, 0)
    return () => clearTimeout(timer)
  })


  return (
    <Wrapper
      style={{
        display: avoidPreLoad ? `none` : `flex`,
        transition: 'transform 0.5s cubic-bezier(0.26, 1.2, 0.76, 1.22), margin-top 0.15s linear',
        transform: pageLoading || windowLoad ? `translateY(-300px)` : `translateY(0)`,
        width: `${100 - (columnWidth * 3)}%`,
        left: `${contentPositionSelector}%`,
        marginTop: scrollDirection === 'down' ? '-10rem' : 0,
      }}>
    <LeftSide>
      <Logo></Logo>
      <div style={{color: `${COLORS.TEXT_GREY}`}}>Company</div>
      <div style={{color: `${COLORS.TEXT_GREY}`}}>Our quick slogan</div>
    </LeftSide>

    <Button style={{backgroundColor:  `${COLORS.ONE}`}}>
      <div>Contact </div>
        <svg style={{
          transform: `translateY(4px)`,
          width: '1.5rem',
          height: '1.5rem',
          backgroundImage: `url(/img/forward-arrow.svg)`,
          backgroundRepeat: 'no-repeat',
          }} />
    </Button>

      <Hamburger
        style={{
        display: 'none'
      }}>
    <div ></div>
    <div ></div>
    <div  ></div>
      </Hamburger>
      
      
  </Wrapper>
  )
}


const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  transform: translateY(-300px);
  /* animation: navFallDown 3s cubic-bezier(0.26, 1.2, 0.76, 1.22) 1 ; */
  z-index: 3;
`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 3rem;
  padding: 0.6rem 1.5rem;
  width: 12vw;
  border-radius: 50px;
  border: none;
  font-size: 1.5rem;
  color: #f9f5ed;
  cursor: pointer;

`

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 6rem;

  & div:nth-child(2) {
    margin: 0 4rem 0 2rem;
    letter-spacing: 0.6rem;
    font-size: 2.5rem;
  }
  & div:last-child {
    font-size: 1rem;
    width: 5vw;
    opacity: 0.6;
  }
`
const Logo = styled.svg`
  width: 6vw;
  height: 6vw;
  /* background-image: url(/img/baby-feet.svg); */
  background-repeat: no-repeat;
  opacity: 0.6;
`

const Hamburger = styled.button`
  
`