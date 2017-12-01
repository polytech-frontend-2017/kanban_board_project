import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends Component {
  render () {
    return (
      <div id = "Modal">
      </div>
    )
  }
}

function getModal () {
  ReactDOM.render(
    <Modal/>,
    document.getElementById('modal-window')
  )
}

export default Modal
