import React, {Component} from 'react'
import Card from './CardEx'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

const listTargetSpec = {
  hover(props, monitor) {
      const draggedId = monitor.getItem().id;
      props.cardCallbacks.updateStatus(draggedId, props.id);

      
    console.log(draggedId)
    console.log( props.id)
    console.log(props)
   
    }
};

function collect(connect, monitor) {
  return {
      connectDropTarget: connect.dropTarget()
  };
}
     

class ListComponent extends Component {
  
  render () {const { connectDropTarget } = this.props
    let cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          color={card.color}
          cardCallbacks={this.props.cardCallbacks}
        />
      )
    })
   

    let columnTitle
    if (this.props.id !== 'start') {
      columnTitle = <h1 className="ColumnHeader">{this.props.title}</h1>
    }
    return connectDropTarget(
      <div id = { this.props.id } className="listComponent">
        { columnTitle }
        <div className="listIn" >{cards}</div>
      </div>
    )
  }
}
ListComponent.PropTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
    connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget('card', listTargetSpec, collect)(ListComponent)
