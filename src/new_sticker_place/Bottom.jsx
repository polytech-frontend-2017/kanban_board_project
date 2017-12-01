import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '.././modal/Modal'
import './Bottom.css'

class NewStickerButton extends Component {
  render () {
    return (
      <button /* onClick={ Функция модального окна } */>Show modal</button>
    )
  }
}

class Bottom extends Component {
  render () {
    return (
      <div id = "bottom">
        <NewStickerButton/>
      </div>
    )
  }
}

export default Bottom
