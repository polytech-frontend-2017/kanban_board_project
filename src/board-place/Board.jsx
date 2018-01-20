import React, { Component } from 'react'
import update from 'react-addons-update'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './Board.css'
import './Card.css'
import ListComponent from './listComp'
import Bottom from './new_sticker_place/Bottom'
import axios from 'axios'

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
          status: 'start',
          color: '#ffa5ac'
        }, {
          id: 4,
          title: 'fourth card',
          description: 'some desc',
          status: 'start',
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
          id: 32,
          title: 'second card',
          status: 'in-progress',
          color: '#fefb64'
        },     {
          id: 46,
          title: 'second card',
          description: 'some desc',
          status: 'start',
          color: '#ffa5ac'
        }, {
          id: 77,
          title: 'fourth card',
          description: 'some desc',
          status: 'start',
          color: '#85e996'
        },
        {
          id: 76,
          title: 'third card',
          description: 'some desc',
          status: 'in-progress',
          color: '#fefb64'
        }, {
          id: 66,
          title: 'fifth card',
          description: 'some desc',
          status: 'in-progress',
          color: '#ffa5ac'
        }, {
          id: 65,
          title: 'second card',
          status: 'in-progress',
          color: '#fefb64'
        },
         {
          id: 63,
          title: 'fifth card',
          description: 'some desc',
          status: 'in-progress',
          color: '#ffa5ac'
        }, {
          id: 21,
          title: 'second card',
          status: 'in-progress',
          color: '#fefb64'
        }
      ],
      newCard: {
        id: '',
        title: '',
        description: '',
        status: '',
        color: ''
      }
    }

    this.addCard = this.addCard.bind(this)
    this.apiUrl = 'http://localhost:5000/api/sticker_info'
  }

  updateCardStatus(cardId,listId)
  {
    //получаем id стикера
    let cardIndex = this.state.cards.findIndex((card)=>card.id ===cardId);
    //получаем id поля
    let card = this.state.cards[cardIndex];
    //если не в текущем компоненте
     console.log('cardIndex '+cardIndex)
    console.log('card '+card)
    console.log(this.state)
   // if (card.status !== listId ) {
      //обновление статуса у стикера
      this.setState(update(this.state, {
        cards: {
            [cardIndex]: {
                status: {$set: listId}
            }
        }
    }));//}
   
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
            cardCallbacks={{ updateStatus: this.updateCardStatus.bind(this)}}
          />
          <ListComponent
            id='in-progress'
            title="In Progress"
            cards={this.state.cards.filter((card) => card.status === 'in-progress')}
            cardCallbacks={{updateStatus: this.updateCardStatus.bind(this)}}
          />
          <ListComponent
            id='done'
            title='Done'
            cards={this.state.cards.filter((card) => card.status === 'done')}
            cardCallbacks={{updateStatus: this.updateCardStatus.bind(this)}}
          />
       

          
        </div>
        
        <Bottom
         id='no'
      
          onClickPlus={this.addCard}
        />
           <ListComponent
            id='start'
            title='Start Position'
            cards={this.state.cards.filter((card) => card.status === 'start')}
            cardCallbacks={{updateStatus: this.updateCardStatus.bind(this)}}
          />
        
      
      </div>
    )
  }
}
//инициализируем React DnD
export default DragDropContext(HTML5Backend)(Board);
