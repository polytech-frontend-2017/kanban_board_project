import React, {Component} from 'react'
import './style/MainStickerField.css'
import axios from 'axios'

class AddSticker extends Component {
  render () {
    return (
      <div id = "AddSticker">
        <button id = "Plus" onClick = {this.props.onClickPlus}>
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
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
  }

  handleChangeTitle (event) {
    const title = event.target.value
    this.props.onChange(title)
  }

  render () {
    return (
      <div id = "StickerHead" >
        <div id = "StickerID">ID46</div>
        <input
          autoFocus="autofocus"
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
  constructor (props) {
    super(props)
    this.state = { id: 15, title: '', color: 'yellow' }
    this.changeTitle = this.changeTitle.bind(this)
    this.addInfo = this.addInfo.bind(this)
    this.apiUrl = 'http://localhost:5000/api/sticker_info'
  }

  changeTitle (newTitle) {
    this.setState({title: newTitle}, () => {
      console.info('Send to server: ' + this.state.title)
      axios.post(this.apiUrl, { title: this.state.title })
        .then((res) => {
          console.info(res.data)
          console.info('changeTitle is working')
        })
    })
  }

  addInfo () {
    const title = this.state.title
    this.props.onClick(title)
    console.info('Click is working')
  }

  render () {
    return (
      <div id = 'MainStickerField'>
        <StickerHead
          onClickClose = {this.props.onClickClose}
          onChange = {this.changeTitle}
        />
        <StickerDiscription/>
        <AddSticker
          onClickPlus = {this.props.onClickPlus}
         />
      </div>
    )
  }
}

export default MainStickerField
