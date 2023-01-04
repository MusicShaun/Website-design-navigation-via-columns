import styled from 'styled-components'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import MobileNavCards from './MobileNavCards'


export default function MobileNav() {

  const [menuVisible, setMenuVisible] = useState(false);

  function triggerMenu() {
    if (menuVisible) {
      const timer = setTimeout(() => {
        setMenuVisible(false)
      }, 100)
      return () => clearTimeout(timer)
    }
    if (!menuVisible) {
      setMenuVisible(true)
    }
  }

  return (
    <div className='mobile_nav' style={{
      position: 'fixed',
      left: 0,
      top: 0,
      padding: 0,
      margin: 0,
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundColor: `${COLORS.PAGE}`,
      transition: 'all 0.2s',
      zIndex: 11,
    }}>
      <h1> This page is intentially blank</h1>
      <Hamburger onClick={triggerMenu}>
        <div style={{top: '10px'}}></div>
        <div style={{bottom: '10px'}}></div>
        <div style={{top: '50%', transform: 'translateY(-50%)'}}></div>
      </Hamburger>

      {menuVisible && 
      <div >
      <MobileNavCards
        colors={COLORS.ONE}
        transformer={`rotate(355deg)`}
        animationTime='0.5s'
        topper='10'  />
      <MobileNavCards
        colors={COLORS.TWO}
        transformer={`rotate(345deg)`} 
        animationTime='0.33s'
        topper='20'  />
      <MobileNavCards
        colors={COLORS.THREE}
        transformer={`rotate(335deg)`} 
        animationTime='0.2s'
        topper='30'  />
      <MobileNavCards
        colors={COLORS.FOOTER}
        transformer={`rotate(325deg)`} 
            animationTime='0.1s' 
        topper='40'  />
      </div>
      }
    </div>
  )
}


const Hamburger = styled.nav`
  position: absolute;
  right: 5%;
  top: 5%;
  justify-content: center;
  width: 50px;
  height: 50px;
  max-width: 6rem;
  max-height: 6rem;
  padding: 10px ;
  outline: inherit;
  z-index: 1000;

  & div {
    position: absolute;
    border: 2px solid black;
    border-radius: 2px;
    width: 90%;
    transition: 0.2s all;
    left: 0;
  }
`