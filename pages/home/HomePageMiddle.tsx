import styled from 'styled-components'
import { COLORS } from '../../constants/colors'


import React from 'react'

export default function HomePageMiddle() {
  return (
    <Wrapper style={{ color: `${COLORS.TEXT_GREY}` }}>
      <TEMP>We don’t serve their kind here! What? Your droids.
        They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder.
        We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!?
        He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself.
        We’re wanted men. I have the death sentence in twelve systems.
        I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…</TEMP>
      <TEMP>Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early.
        Uh? Did he take those two new droids with him? I think so.
        Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay!
        Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator.</TEMP>

    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TEMP = styled.p`
  width: 70%;
  font-size: 1.2rem;
`