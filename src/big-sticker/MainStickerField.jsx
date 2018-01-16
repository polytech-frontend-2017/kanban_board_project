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
    this.state = { title: '' }
  }

  handleHide () {
    this.setState({showModal: false})
  }

  handleChangeTitle (event) {
    this.setState({ title: event.target.value })
  }

  render () {
    let title = this.state.title
    console.info(title)
    return (
      <div id = "StickerHead" >
        <div id = "StickerID">ID46</div>
        <input
          autofocus="autofocus"
          type = "text"
          id = "StickerName"
          value={ this.state.value }
          title = {title}
          onChange = { this.handleChangeTitle }
          
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
    let id = 15
    let color = 'yellow'
    
    console.info(this.state)
    console.info(this.props)

    return (
      <div id = 'MainStickerField'>
        <StickerHead onClickClose = {this.props.onClickClose} title = {this.props.title}/>
        <StickerDiscription/>
        <AddSticker
          onClickPlus = {this.props.onClickPlus}
          id = {id}
          color = {color}
          
        />
      </div>
    )
  }
}

export default MainStickerField
