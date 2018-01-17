import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../modal/Modal'
import BigSticker from '../../big-sticker/BSticker'
import MiniCard from '../miniCard/miniCard.jsx'
import ListComponent from '../listComp.jsx'
import PropTypes from 'prop-types'
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

  addMinSticker () {
    
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
        <button onClick={ this.handleClick } id="AddStickerButton">
          <img src="./button_img/plus.png" className="AddStickerButton" alt="AddStickerButton"/>
        </button>
        {modal}
      </div>
    )
  }
}

class Bottom extends Component {
  render () {
    let listComp
    if (this.props.cards) {
      listComp = <ListComponent id='userList' cards = {this.props.cards}/>
    }

    return (
      <div id = "bottom">
        <NewStickerButton/>
        <MiniCard/>
      </div>
    )
  }
}

export default Bottom
