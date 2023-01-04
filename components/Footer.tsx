import styled from 'styled-components'
import Facebook from '../img/Facebook'
import { COLORS } from '../constants/colors'
import { useGlobalContext } from '../globalContexts'
import {useScrollPosition} from '../hooks/useScrollPosition'
import { useWindowSize } from 'usehooks-ts';
import { useAppSelector } from '../app/hooks'

export default function Footer() {

  const { pageLoading, columnWidth } = useGlobalContext();
  const { height}  = useWindowSize();
  const scrollPosition = useScrollPosition(); 

  const contentPositionSelector = useAppSelector(state => state.contentPosition.value);

  

  return (
    <Wrapper
      style={{
        display: pageLoading ? 'none' : 'flex',
        top: `${height * 2.2}px`,
        height: `${height  * 0.8}px`,
        width: `${100 - (columnWidth * 3)}%`,
        marginLeft: `${contentPositionSelector}%`,
      }}>
      <Background
        style={{
          backgroundColor: `${COLORS.FOOTER}`,
        }} />
      <Container
        style={{
          transform: `translate3d(0, -${height - (scrollPosition /2)}px, 0)`,
        }}>
        <Box>
          <div>Want our help? <br /> We got you</div>
          <div><span>Contact</span>pages and some</div>
          <div><span>Other thing</span>pages and resources</div>
        </Box>
      
        <Box2>
          <a>
            <div>Reach out mail</div>
            <SVG><Facebook /></SVG>
          </a>
   
        <div>
          <a><SVG><Facebook /></SVG></a>
          <a><SVG><Facebook /></SVG></a>
          <a><SVG><Facebook /></SVG></a>
          <a><SVG><Facebook /></SVG></a>

        </div>
      </Box2>

      {/* <Box>
        <img class="footer__bottom-1 footer__left"></img>
        <div class="footer__bottom-2 footer__center">all rights reserved 
          <span>Glossary</span>
        </div>
      </Box> */}
    </Container>
  </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;
  overflow-y: hidden;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 10%;
  & > div { 
    display: flex;
    flex-direction: row;
  }

`
const Box = styled.div`
  margin-top: 4rem;
  color: white;

  & > div {
    display: flex;
    flex-direction: column;
    width: 20%;
    font-size: 1.5rem;
  }
  &:first-child {
    margin-bottom: 4rem;
  }
  & div:first-child {
    width: 60%;
    line-height: 4rem;
    font-size: 5rem;
  }
  & span {
    line-height: 3rem;
    font-size: 1rem;
  }
`

const Box2 = styled.div`
  margin-top: 4rem;
  color: white;

  & > a {
    display: flex;
    align-items: center;
    width: 50%;
  }
  & div:last-child {
    left: 10rem;
    display: flex;
  }
`

const SVG = styled.div`
  width: 70px;
  aspect-ratio: 1/1;

  & > svg {
    width: 100%;
    height: 100%;
  }
`