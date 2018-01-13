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
          1
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
          2
        </button>
        <button id = "ChangeColour" className = 'CurcleButton'>
          3
        </button>
        <button id = "RemoveSticker" className = 'CurcleButton'>
          4
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
        <MainStickerField/>
        <ButtonUsersDiv/>
        <UserList/>
      </div>
    )
  }
}

export default BigSticker
