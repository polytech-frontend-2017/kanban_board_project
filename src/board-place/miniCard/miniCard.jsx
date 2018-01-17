import React from 'react'
import ReactDOM from 'react-dom'
import './miniCard.css'

/*
const green = 'rgb(132, 255, 179)'
const yellow = '#fff6cf'
const red = 'rgb(250, 144, 144)'
*/

export default class MiniCard extends React.Component {
  render () {
    let card = {
      key: this.props.key,
      id: this.props.id,
      backgroundColor: this.props.color,
      cardName: this.props.cardName,
      cardDescription: this.props.cardDescription
    }

    return (
      <div className="MiniCard" draggable="true" style={card.backgroundColor}>
        <div className="card_title">
          {card.cardName}
        </div>
       
      </div>
    )
  }
}
