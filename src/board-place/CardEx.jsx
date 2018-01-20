import React, {Component} from 'react'
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

// описываем как надо реагировать на перетаскиваня
const cardDragSpec = {
  beginDrag (props) {
    return {
      id: props.id,
      status: props.status
    }
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

class Card extends Component {
  render () {
    let BackgrounColor = {
      backgroundColor: this.props.color
    }
    const { connectDragSource } = this.props

    return connectDragSource(
      <div className="card" draggable="true" style={BackgrounColor}>
        <div className="card_title" >
          {this.props.title}
        </div>
        <div className="card_description" >
          {this.props.description}
        </div>
      </div>
    )
  }
}
Card.PropTypes =
{
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  connectDragSource: PropTypes.func.isRequired
}
// делаем компонент перетаскиваемым
export default DragSource('card', cardDragSpec, collectDrag)(Card)
