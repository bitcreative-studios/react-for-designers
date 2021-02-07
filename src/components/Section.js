import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.section`
  position: relative;
  background: url(${p => p.image}) center center;
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  color: #fff;
`

const SectionLogo = styled.img`
  width: 120px;
  align-self: end;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 20px;
  margin: 0 40px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`
const SectionText = styled.p``

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  transform: rotate(180deg);
  top: -6px;
`
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const Section = ({ image, logo, title, text }) => {
  return (
    <SectionGroup image={image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleGroup>
      <WaveBottom>
        <Wave />
      </WaveBottom>
    </SectionGroup>
  )
}

Section.propTypes = {
  image: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Section
