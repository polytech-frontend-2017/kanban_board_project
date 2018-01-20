import React, { Component } from 'react'
import './style//BSticker.css'
import MainStickerField from './MainStickerField'
import ButtonCheckDivs from './ShowHideBlock'
import ShowHideColor from './ShowHideColor'

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

class RemoveStic extends Component {
  render () {
    return (
      <button id = "RemoveSticker" className = 'CurcleButton'>
        <img src="./button_img/rubbish-bin.png" id="RemoveStic" alt="RemoveSticker"/>
      </button>
    )
  }
}

class ButtonUsersDiv extends Component {
  render () {
    return (
      <div id = 'ButtonUsersDiv'>
        <ShowHideColor/>
        <RemoveStic/>
      </div>
    )
  }
}

class BigSticker extends Component {
  render () {
    return (
      <div id = 'BigSticker'>
        <ButtonCheckDivs/>
        <MainStickerField
          onClickClose = {this.props.onClickClose}
          onClickPlus = {this.props.onClickPlus}/>
        <ButtonUsersDiv/>
      </div>
    )
  }
}

export default BigSticker
