import styled from 'styled-components';



import React from 'react'

interface IProps {
  colors: string;
  transformer: string;
  animationTime: string;
  topper: string;
}
export default function MobileNavCards({colors, transformer, animationTime, topper}: IProps) {


  return (
    <Card style={{
      position: 'absolute',
      width: '90vw',
      top: `${topper}vh`,
      right: '-150vw',
      height: '70vh',
      display: 'flex',
      zIndex: 113,
      borderRadius: '10px',
      transform: `${transformer}`,
      backgroundColor:`${colors}`,
      animation: `CardIn 1.5s cubic-bezier(.17,.67,.45,1.02) ${animationTime} forwards`
    }}>
    </Card>
  )
}

const Card = styled.div`
  @keyframes CardIn {
    from {
    right: -100vw;
    transform: rotate(360deg);
  } to {
    right: -17vw;
    transform: rotate(calc(360deg - 0));
  }
  }
`
