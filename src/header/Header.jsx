import React, { Component } from 'react'
import logo from '../img/React-JS.png'
import './Header.css'

class ProjectButton extends Component {
  render () {
    return (
      <div className = "pr_button">
        Projects
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <header id="header">
        <img src={logo} className="logo" alt="logo" />
        <ProjectButton/>
      </header>
    )
  };
}

export default Header
