import React, { Component } from 'react'
import update from 'react-addons-update'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './Board.css'
import './Card.css'
import ListComponent from './listComp.jsx'
import Bottom from './new_sticker_place/Bottom.jsx'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [
        {
          id: 1,
          title: 'first card',
          description: 'some desc',
          status: 'todo',
          color: '#85e996'
        },
        {
          id: 2,
          title: 'second card',
          description: 'some desc',
          status: 'done',
          color: '#ffa5ac'
        }, {
          id: 4,
          title: 'fourth card',
          description: 'some desc',
          status: 'in-progress',
          color: '#85e996'
        },
        {
          id: 3,
          title: 'third card',
          description: 'some desc',
          status: 'in-progress',
          color: '#fefb64'
        }, {
          id: 5,
          title: 'fifth card',
          description: 'some desc',
          status: 'in-progress',
          color: '#ffa5ac'
        }, {
          id: 6,
          title: 'second card',
          description: 'some desc',
          status: 'in-progress',
          color: '#fefb64'
        }
      ]
    }
  }
  render () {
    return (
      <div id = "board">
        <div id = 'worker-columns'>
          <ListComponent id='todo' title="To Do" cards={this.state.cards.filter((card) => card.status === 'todo')}/>
          <ListComponent id='in-progress' title="In Progress" cards={this.state.cards.filter((card) => card.status === 'in-progress')}/>
          <ListComponent id='done' title='Done' cards={this.state.cards.filter((card) => card.status === 'done')}/>
        </div>
        <Bottom cards={this.state.cards.filter((card) => card.status === 'start')}/>
      </div>
    )
  }
}

export default Board
