import { useEffect, useState } from 'react';
import { useGlobalContext } from '../globalContexts/index';
import styled from 'styled-components';
import { CUBIC } from '../constants/cubicBezier';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface IProps { 
  click: () => void;
  flexing: boolean;
  margining: string;
  color: string;
  text: string;
  name: string;
  navigateTo: string;
}


export default function Column({ click, flexing, margining, color, text, name, navigateTo}: IProps) {

  const { columnWidth, pageLoading } = useGlobalContext();
  const [textEntry, setTextEntry] = useState(true);
  const [textEntryOnPageChange, setTextEntryOnPageChange] = useState(false)


  useEffect(() => { // Trigger on initial page load 
    const timer = setTimeout(() => {
      setTextEntry(false)
    }, 1300)
    return () => clearTimeout(timer)
  }, [])  

  useEffect(() => { // Trigger every page turn 
    setTextEntryOnPageChange(true)
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      setTextEntryOnPageChange(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [pageLoading])

  function whereToNavigateTo(navigateTo: string) { //* quick check to see where the href is, and where to navigate to 
    if (navigateTo === 'three') {
      return window.location.href.includes('page') ? '/' : 'page1'
    } else if (navigateTo === 'two') {
      return window.location.href.includes('page3') || window.location.href.includes('page2') ? 'page1' : 'page2'
    } else {
      return window.location.href.includes('page3') ? '/page2' : 'page3'
    }
  }
  
  return (

    <Wrapper
      onClick={click}
      style={{
        position: 'relative',
        flexGrow: flexing ? 1 : 0,
        marginLeft: margining,
        height: `0%`,
        width: `${columnWidth}%`,
        backgroundColor: color,
        transition: `flex-grow 0.76s ${CUBIC.BOUNCE_IN}`,
        animationDelay: name === 'one' ? '0s' : 
          name === 'two' ? '0.17s' : '0.4s',
      }}
    >
      <Link href={whereToNavigateTo(navigateTo)} style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }} />

    <Icon
        style={{
          transform: pageLoading ? 'scale(0) rotate(900deg) ' : 'scale(1) rotate(0deg)',
          transition: 'transform 1s cubic-bezier(0, 0, 0.34, 1.14)'  
      }}>
      <FontAwesomeIcon icon={faFan}
        style={{

        }} /> 
    </Icon>
      
      <div // Text running vertically
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '12%',
          width: '300px',
          height: '50px',
          overflow: 'hidden',
          transition: `transform .5s ${CUBIC.BOUNCE_IN}`,
          transform: `${textEntryOnPageChange && pageLoading? 'translateY(400px)' : 'translateY(0)'}
                      translateX(-50%) 
                      rotate(90deg) 
                      `, 
          display: 'flex', 
          alignItems: 'center',
          
        }}>
        <h1
          style={{
            transition: 'transform .5s linear',
            transform: `${(textEntry ? 'translateY(-100px)' : 'translateY(-0)')} 
                        `,
            display: 'flex',
            alignItems: 'center',
            fontSize: '3rem',
            color: 'white',   
            fontWeight: '400',
          }}
        >
          {text}
        </h1>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  animation: onLoad 1s linear forwards; 

  @keyframes onLoad {
    0% {
      height: 0%;
      top: 100%;

    } 100%{

      height: 100%;
      top: 0%
    }
  }
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-top: 2rem;

  & svg {
    width: 50px;
    height: 0px;
    color: white;
    aspect-ratio: 1/1;
    animation: spinning 1.5s cubic-bezier(0, 0, 0.34, 1.14) 1.5s forwards;
  }

  @keyframes spinning {
    0% {
      transform: rotate(0deg);
      height: 0px;
    } 100% {
      transform: rotate(900deg);
      height: 50px;
    }
  }
`