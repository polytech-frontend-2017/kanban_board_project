import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './MainStickerField.css'
import Modal from '../modal/Modal'
import BigSticker from '../big-sticker/BSticker'
import axios from 'axios'
import Board from '../board-place/Board'

class AddSticker extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick (event) {
    const click = true
    this.props.onClick(click)
  }

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
  constructor (props) {
    super(props)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  handleChangeDescription (event) {
    const description = event.target.value
    const id = event.target.id
    this.props.onChange(description, id)
  }

  handleChangeDate (event) {
    const date = event.target.value
    const id = event.target.id
    this.props.onChange(date, id)
  }

  render () {
    return (
      <div id = "StickerDiscription">
        <textarea
          id = "TArea"
          placeholder="Text description on this sticker"
          required
          onChange = {this.handleChangeDescription}>
        </textarea>
        <input type = "date" id="date"
          onChange = {this.handleChangeDate}
        />
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
    const id = event.target.id
    this.props.onChange(title, id)
  }

  render () {
    return (
      <div id = "StickerHead" >
        <div id = "StickerID">New</div>
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
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      color: '#fefb64',
      date: ''
    }

    this.changeArguments = this.changeArguments.bind(this)
    this.addInfo = this.addInfo.bind(this)

    this.apiUrl = 'http://localhost:5000/api/set_new_sticker'
  }

  changeArguments (newArgument, id) {
    switch (id) {
      case 'date':
        this.setState({date: newArgument})
        break
      case 'StickerName':
        this.setState({title: newArgument})
        break
      case 'TArea':
        this.setState({description: newArgument})
        break
      default:
        this.setState({color: '#fff6cs'})
        break
    }
    /*
    this.setState({title: newTitle}, () => {

    })
    */
  }

  addInfo () {
    console.info('Click is working')
    console.info(this.state)
    axios.post(this.apiUrl, { card: this.state })
      .then((res) => {
        console.info(res.data)
        console.info('changeTitle is working')
      })
  }

  render () {
    return (
      <div id = 'MainStickerField'>
        <StickerHead
          onClickClose = {this.props.onClickClose}
          onChange = {this.changeArguments}
        />
        <StickerDiscription
          onChange = {this.changeArguments}
        />
        <AddSticker
          onClickPlus = {this.addInfo}
        />
      </div>
    )
  }
}

export default MainStickerField
