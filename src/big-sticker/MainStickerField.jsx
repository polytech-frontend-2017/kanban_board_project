import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './MainStickerField.css'
import Modal from '../modal/Modal'
import BigSticker from '../big-sticker/BSticker'

class AddSticker extends Component {
  render () {
    return (
      <div id = "AddSticker">
        <button id = "Plus" onClick = { this.props.onClickPlus }>
          <img src="./button_img/plus.png" id="plus" alt="plus"/>
        </button>
      </div>
    )
  }
}

class StickerDiscription extends Component {
  render () {
    return (
      <div id = "StickerDiscription">
        <textarea
          id = "TArea"
          placeholder="Text description on this sticker"
          required
          description = { this.props.description }>
        </textarea>
        <input type = "date" id="date"/>
      </div>
    )
  }
}

class StickerHead extends Component {
  constructor (props) {
    super(props)
    this.handleHide = this.handleHide.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
  }

  handleHide () {
    this.setState({showModal: false})
  }

  handleChangeTitle (event) {
    const title = event.target.value
    this.props.addCard(title)
  }

  render () {
    return (
      <div id = "StickerHead" >
        <div id = "StickerID">ID46</div>
        <input
          autofocus="autofocus"
          type = "text"
          id = "StickerName"
          onChange = {this.handleChangeTitle}
          placeholder="Input a card name"
          required
        />
        <button id = "Close" onClick = {this.props.onClickClose}>
          <img src="./button_img/unchecked.png" id="close" alt="close"/>
        </button>
      </div>
    )
  }
}

class MainStickerField extends Component {
  /*
  constructor (props) {
    super(props)
    this.state = { id: 15, title: '', color: 'yellow' }
  }
  */

  render () {
    return (
      <div id = 'MainStickerField'>
        <StickerHead
          onClickClose = {this.props.onClickClose}/>
        <StickerDiscription/>
        <AddSticker
          onClickPlus = {this.props.addCard}
        />
      </div>
    )
  }
}

export default MainStickerField
