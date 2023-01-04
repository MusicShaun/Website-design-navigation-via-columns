import styled from 'styled-components'
import React from 'react'
import { COLORS } from '../constants/colors'

export default function EmptyPagesExample() {
  return (
    <Wrapper style={{backgroundColor: `${COLORS.PAGE}`}}>
      <First>
        <BigBlank />
        <ColumnContainer>
          <Line />
          <Line />
          <Line />
        </ColumnContainer>
      </First>
      <First>
        <Paragraph>
          lar aidjsfijaisjdfia jaisdjf adsf nrgoiasd fasdfjaosdfiasdfj asdf aidsfj <br /> kajdsfjakdjsfjkajdsf
          adksfjakjdsfkjjk sdf <br /> kajdjsfkjadsfkjakjsdf
          <br/> kajsdkfjakdjfkj asd fkj a sdfj aksdjf adjsf alsdkfj alksdjf lajsd flkj alksdjfkl ajlkdsj klsj frkdsj <br /> kajdsfjakdjsfjkajdsf
          adksfjakjdsfkjjk sdf <br /> kajdjsfkjadsfkjakjsdf
          <br/> kajsdkfjakdjfkj asd fkj a sdfj aksdjf adjsf alsdkfj alksdjf lajsd flkj alksdjfkl ajlkdsj klsj frkdsj 
        </Paragraph>
        <ColumnContainer style={{width:'35%'}}>
          <SmallBlank />
          <SmallBlank />
        </ColumnContainer>
      </First>

      <Second>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>
        <Block><Plate /><Texter>kasdjfkj asdkfjdkasfjsdkf <br/> aksdjfkjakjsdakjsdfkjakdf jasdf <br/> kajdskfjakdjsf </Texter></Block>

      </Second>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
const First = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 40vh;

  &:first-child {
    margin-top: 20%;
  }

`
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  width: 65%;
  height: 50%;
  gap: 10px;
`
const BigBlank = styled.div`
  width: 25%;
  height: 50%;
  background-color: #abfbff;
  border-radius: 10px;
`
const SmallBlank = styled.div`
  width: 90%;
  height: 45%;
  background-color: #abfbff;
  border-radius: 10px;
`
const Line = styled.div`
  width: 100%;
  height: 25%;
  background-color: #abfbff;
  border-radius: 10px;
`
const Paragraph = styled.p`
  width:55%;
  color: #abfbff;
`

const Second = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`
const Block = styled.div`
  min-width: 20%;
  height: 28%;
`
const Plate = styled.div`
  background-color: #abfbff;
  width: 100%;
  height: 75%;
  border-radius: 15px;
`
const Texter = styled.p`
    color: #abfbff;

`