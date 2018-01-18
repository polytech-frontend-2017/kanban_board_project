import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './BSticker.css'
import ToDoList from './ToDoList'
import MainStickerField from './MainStickerField'
import UserList from './UserList'

class ButtonCheckDiv extends Component {
  render () {
    return (
      <div id = 'ButtonCheckDiv'>
        <button id = 'GetCheckList' className = 'CurcleButton'>
          <img src="./button_img/list.png" id="GetCheckListImg" alt="checkedList"/>
        </button>
      </div>
    )
  }
}

class ButtonUsersDiv extends Component {
  render () {
    return (
      <div id = 'ButtonUsersDiv'>
        <button id = "GetUsersList" className = 'CurcleButton'>
          <img src="./button_img/add-user-button.png" id="AddUser" alt="AddUser"/>

        </button>
        <button id = "ChangeColour" className = 'CurcleButton'>
          <img src="./button_img/paint-bucket.png" id="PaintBucket" alt="PaintBucket"/>

        </button>
        <button id = "RemoveSticker" className = 'CurcleButton'>
          <img src="./button_img/rubbish-bin.png" id="RemoveStic" alt="RemoveSticker"/>
        </button>
      </div>
    )
  }
}

class BigSticker extends Component {
  render () {
    return (
      <div id = 'BigSticker'>
        <ToDoList/>
        <ButtonCheckDiv/>
        <MainStickerField
          onClickClose = {this.props.onClickClose}
          onClickPlus = {this.props.onClickPlus}
        />
        <ButtonUsersDiv/>
        <UserList/>
      </div>
    )
  }
}

export default BigSticker
