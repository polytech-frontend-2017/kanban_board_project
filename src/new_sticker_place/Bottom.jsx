import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../modal/Modal'
import BigSticker from '../big-sticker/BSticker'
import './Bottom.css'

class NewStickerButton extends Component {
  constructor (props) {
    super(props)
    this.state = {showModal: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if (this.state.showModal === true) {
      this.setState({showModal: false})
    } else {
      this.setState({showModal: true})
    }
  }

  render () {
    const modal = this.state.showModal ? (
      <Modal>
        <div className = 'modal'>
          <BigSticker onClickClose={this.handleClick}/>
        </div>
      </Modal>
    ) : null

    return (
      <div>
        <button onClick={ this.handleClick }>Show modal</button>
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
