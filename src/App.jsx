import React, { Component } from 'react'
import Header from './header/Header'
import Board from './board-place/Board'
import './App.css'

class App extends Component {
  render () {
    return (
      <div id = "App">
        <Header/>
        <Board/>
      </div>
    )
  };
}

export default App
