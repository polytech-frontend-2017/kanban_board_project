import React, { Component } from 'react'
import update from 'react-addons-update'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './Board.css'
import './Card.css'
import ListComponent from './listComp.jsx'
import Bottom from './new_sticker_place/Bottom.jsx'
import axios from 'axios'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {

      cards: [
        {
          id: 1,
          title: 'first card',
          status: 'todo',
          color: '#85e996'
        },
        {
          id: 2,
          title: 'second card',
          status: 'done',
          color: '#ffa5ac'
        }, {
          id: 4,
          title: 'fourth card',
          status: 'in-progress',
          color: '#85e996'
        },
        {
          id: 3,
          title: 'third card',
          status: 'in-progress',
          color: '#fefb64'
        }, {
          id: 5,
          title: 'fifth card',
          status: 'in-progress',
          color: '#ffa5ac'
        }, {
          id: 6,
          title: 'second card',
          status: 'in-progress',
          color: '#fefb64'
        }
      ],
      newCard: {
        id: '',
        title: '',
        status: 'start',
        color: ''
      }
    }

    this.addCard = this.addCard.bind(this)
    this.apiUrl = 'http://localhost:5000/api/sticker_info'
  }

  addCard () {
    // Make HTTP reques with Axios
    console.info('Плюс работает:')
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        console.info('А тут уже блок с карточками читает:')
        console.info(res.data)
        this.setState({
          newCard: {
            id: '15',
            title: res.data.title,
            status: 'start',
            color: '#ffa5ac'
          }
        })
        this.state.cards.push(this.state.newCard)
      })
  }

  render () {
    return (
      <div id = "board">
        <div id = 'worker-columns'>
          <ListComponent
            id='todo'
            title="To Do"
            cards={this.state.cards.filter((card) => card.status === 'todo')}
          />
          <ListComponent
            id='in-progress'
            title="In Progress"
            cards={this.state.cards.filter((card) => card.status === 'in-progress')}
          />
          <ListComponent
            id='done'
            title='Done'
            cards={this.state.cards.filter((card) => card.status === 'done')}
          />
        </div>
        <Bottom
          cards={this.state.cards.filter((card) => card.status === 'start')}
          onClickPlus={this.addCard}
        />
      </div>
    )
  }
}

export default Board
