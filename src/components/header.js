import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-designcode.svg'
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderGroup">
        {/** the style property here helps force the img element to align
          with the other header elements
         */}
        <Link to="/" style={{ display: 'inline-flex' }}>
          <img src={logo} width="30" alt="" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/courses">Downloads</Link>
        <Link to="/courses">Workshops</Link>
        <Link to="/courses">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
