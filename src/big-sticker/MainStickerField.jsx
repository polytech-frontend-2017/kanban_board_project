import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './MainStickerField.css'
import Modal from '../modal/Modal'
import BigSticker from '../big-sticker/BSticker'

class AddSticker extends Component {
  render () {
    return (
      <div id = "AddSticker">
        <button id = "Plus">+</button>
      </div>
    )
  }
}

class StickerDiscription extends Component {
  render () {
    return (
      <div id = "StickerDiscription">
        <textarea id = "TArea" required></textarea>
        <input type = "date"/>
      </div>
    )
  }
}

class StickerHead extends Component {
  constructor (props) {
    super(props)
    this.handleHide = this.handleHide.bind(this)
  }

  handleHide () {
    this.setState({showModal: false})
  }

  render () {
    return (
      <div id = "StickerHead">
        <div id = "StickerID">ID46</div>
        <input id = "StickerName" type = "text" autofocus required />
        <button id = "Close" onClick = {this.props.onClickClose}>X</button>
      </div>
    )
  }
}

class MainStickerField extends Component {
  render () {
    return (
      <div id = 'MainStickerField'>
        <StickerHead onClickClose = {this.props.onClickClose}/>
        <StickerDiscription/>
        <AddSticker/>
      </div>
    )
  }
}

export default MainStickerField
