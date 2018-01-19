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
        { }
      ]
    }

    this.addCard = this.addCard.bind(this)
    this.apiUrl = 'http://localhost:5000/api/sticker_info'
  }

  componentDidMount () {
    axios.get(this.apiUrl)
      .then((res) => {
        let cardArray = this.state.cards
        for (var i = 0; i < res.data.card.length; i++) {
          let newCard = {
            id: res.data.card[i].Sticker_id,
            title: res.data.card[i].Title,
            status: res.data.card[i].Status,
            description: res.data.card[i].Description,
            color: res.data.card[i].Colour
          }
          cardArray.push(newCard)
        }
        this.setState({
          cards: cardArray
        })
        console.info(this.state.cards)
      })
  }

  addCard () {
    // Make HTTP reques with Axios
    console.info('Плюс работает:')
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        console.info('А тут уже блок с карточками читает:')
        console.info(res.data)
        let newCard = {
          id: '15',
          title: res.data.title,
          status: 'start',
          color: '#ffa5ac'
        }
        let cardArray = this.state.cards
        cardArray.push(newCard)
        console.info(cardArray)
        this.setState({
          cards: cardArray
        })
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
