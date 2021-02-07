import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`
const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: #000 url(${p => p.imgUrl});
  background-size: cover;
  border-radius: 10px;
`
const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const Cell = ({ title, image }) => {
  return (
    <CellGroup>
      <CellImage imgUrl={image} />
      <CellTitle>{title}</CellTitle>
    </CellGroup>
  )
}

Cell.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Cell
