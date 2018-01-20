import React, { Component } from 'react'
import Modal from '../../modal/Modal'
import BigSticker from '../../big-sticker/BSticker'
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
          <BigSticker
            onClickClose={this.handleClick}
            onClickPlus = {this.props.onClickPlus}
          />
        </div>
      </Modal>
    ) : null

    return (
      <div id="blockbut">
        <button
          onClick={ this.handleClick }
          id="AddStickerButton">
          <img
            src="./button_img/plus.png"
            className="AddStickerButton"
            alt="AddStickerButton"
          />
        </button>
        {modal}
      </div>
    )
  }
}

class Bottom extends Component {
  render () {
    return (
      <div id = "bottom">
        <NewStickerButton
          tabindex="1"
          onClickPlus = {this.props.onClickPlus}
        />
      </div>
    )
  }
}

export default Bottom
