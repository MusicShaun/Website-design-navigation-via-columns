import styled from 'styled-components';
import HomePageTop from './home/HomePageTop';
import { useGlobalContext } from '../globalContexts';
import HomePageMiddle from './home/HomePageMiddle';
import { useWindowSize } from 'usehooks-ts';
import { COLORS } from '../constants/colors';

export default function HomePage() {

  const {pageLoading, columnWidth, contentPosition} = useGlobalContext()
  const {height} = useWindowSize();


  return (
    <Section
      style={{
        display: pageLoading ? 'none' : 'flex',
        width: `${100 }%`,
        height: `${height * 3}px`,
        backgroundColor: `${COLORS.PAGE}`
    }}>
      
      <HomePageTop />
      <HomePageMiddle />
    </Section>
  )
}
//<i class="fa-regular fa-flower"></i>

const Section = styled.section`
  position: relative;
  top: 0;
  height: 300vh;
  flex-direction: column;
`