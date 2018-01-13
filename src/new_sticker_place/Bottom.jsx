import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../modal/Modal'
import BigSticker from '../big-sticker/BSticker'
import './Bottom.css'

class NewStickerButton extends Component {
  constructor (props) {
    super(props)
    this.state = {showModal: false}
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  handleShow () {
    this.setState({showModal: true})
  }

  handleHide () {
    this.setState({showModal: true})
  }
  render () {
    const modal = this.state.showModal ? (
      <Modal>
        <div className = 'modal'>
          <BigSticker/>
        </div>
      </Modal>
    ) : null

    return (
      <div>
        <button onClick={ this.handleShow }>Show modal</button>
        {modal}
      </div>
    )
  }
}

class Bottom extends Component {
  render () {
    return (
      <div id = "bottom">
        <NewStickerButton/>
      </div>
    )
  }
}

export default Bottom
