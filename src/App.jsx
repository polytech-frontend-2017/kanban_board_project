import React, { Component } from 'react'
import Header from './header/Header'
import Bottom from './new_sticker_place/Bottom'
import Board from './board-place/Board'
import './App.css'

class App extends Component {
  render () {
    return (
      <div id = "App">
        <Header/>
        <Board/>
        <Bottom/>
      </div>
    )
  };
}

export default App
