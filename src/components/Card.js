import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({ title, text, image }) => {
  return (
    <div className="Card">
      <img src={image} alt="card background" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default Card
