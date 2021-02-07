import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-designcode.svg'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    const { hasScrolled } = this.state
    return (
      <div className={`Header ${hasScrolled ? 'HeaderScrolled' : ''}`}>
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
}

export default Header
