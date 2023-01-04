import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'

export default function HomePageTop() {

  const [windowLoad, setWindowLoad] = useState(true)

  useEffect(() => { // on page load
    setWindowLoad(true)
    const timer = setTimeout(() => {
      setWindowLoad(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
  <>
  <HeroText style={{ color: `${COLORS.TEXT_GREY}` }}>   
    
    <TranslateHider>
      <HeroTitle
      style={{
        transform: windowLoad ? `translateY(${-200}px)` : 'translateY(0)',
      }}>
        <h1> The Best </h1>
        <span  style={{
          color: `${COLORS.TEXT_ORANGE}`    
        }}> Web</span>
      </HeroTitle>
    </TranslateHider>

    <TranslateHider>
      <HeroTitle
        style={{
        transform: windowLoad ? `translateY(${-200}px)` : 'translateY(0)',
            }}>
      <IconSpacer>
        <FontAwesomeIcon icon={faFan}/> 
      </IconSpacer>
        <h1 style={{
          color: `${COLORS.TEXT_ORANGE}`    
        }}>Designs</h1>
      </HeroTitle>
    </TranslateHider>  
        
    <TranslateHider>
      <span
        style={{
          transform: windowLoad ? `translateY(-100)px)` : 'translateY(0)',
            }}>
            Made simple with Next.JS</span> 
    </TranslateHider>
  </HeroText>
    
  </>
  )
}
const HeroText = styled.div`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TranslateHider = styled.div`
  overflow: hidden; 

  &:last-child  {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
  & span {
    display: flex;
    transition: transform 0.5s linear;
    transform: translateY(-100px);
  }
`
const HeroTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  transition: transform 0.5s linear;
  height: 180px;
  width: fit-content;
  transform: translateY(-200px);

  & h1 {
    font-size: 8rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  & div:first-child {
    animation: textAppearY $contentLoadTime linear 1;
  }
`
const IconSpacer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50px;
  height: 100%;
  margin: 0 4rem;

  & svg {
    width: 100px;
    height: 100px;
  }
`
