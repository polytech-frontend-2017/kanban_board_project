import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

const modalWindow = document.getElementById('modal-window')

class Modal extends Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    modalWindow.appendChild(this.el)
  }

  componentWillUnmount () {
    modalWindow.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default Modal
