import styled from 'styled-components'
import Image from 'next/image';
import arrow from '../img/down-arrow.svg'
import { COLORS } from '../constants/colors';
import { useGlobalContext } from '../globalContexts';
import { useAppSelector } from '../app/hooks';


export default function ArrowScrollButton() {

  const { pageLoading } = useGlobalContext();
  const contentPositionSelector = useAppSelector(state => state.contentPosition.value);

  function handleScrollDown() { // Click the arrow on the right hand side to see
    let whereToCap = 0;
    if (window.scrollY < window.innerHeight) {
      whereToCap = window.innerHeight
      console.log('first if')
    } else if (window.scrollY > window.innerHeight * 1.8) {
      whereToCap = 0;
    } else if (window.scrollY >= window.innerHeight) {
      whereToCap = window.innerHeight * 2
    } 
    window.scrollTo(0, whereToCap)
  }



  return (
      <ScrollButton
        onClick={handleScrollDown}
        style={{
          backgroundColor: `${COLORS.ONE}`,
          display: pageLoading ? 'none' : 'flex',
          marginLeft: `${contentPositionSelector + 66}%`,
        }}>
          <Image
            height={150}
            width={60}
            src={arrow}
            alt={arrow}
            style={{
              position: 'absolute',
              height: '150px',
              width: '60px',
              transform:  'scaleY(2) translate(-50%, -40%)',
              stroke: 'transparent',
              strokeWidth: '0px',
              backgroundRepeat: 'no-repeat',
              color: `${COLORS.TEXT_GREY}`,
              cursor: 'pointer',
          }} />

      </ScrollButton>
  )
}


const ScrollButton = styled.button`
  position: fixed;
  top: 110vh;
  padding: 2rem;
  border-radius: 50%;
  transition: 0.2s;
  border: none;
  z-index: 3;

  animation: arrowLoad, bouncy;
  animation-duration:  3s, 4.5s;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;
  animation-timing-function: cubic-bezier(0.26, 1.2, 0.76, 1.22), ease-out;
  animation-delay: 0s, 2s;

  @keyframes bouncy {
  0% {
    top: 90vh;
    transform: rotate(0deg);
  } 2% {
    top: 86vh;
    transform: rotate(45deg);
  } 4% {
    transform: rotate(-45deg);
  } 7% {
    transform: rotate(20deg);
  } 10% {
    transform: rotate(-20deg);
  } 13% {
    top: 86vh;
    transform: rotate(5deg);
  } 16% {
    top: 90vh;
    transform: rotate(0deg);
  } 100% {
    top: 90vh;
  }
}

@keyframes arrowLoad {
  0% {
    top: 110vh;
  }  90% {
    top: 110vh;
  } 100% {
    top: 90vh;
  }
}
`