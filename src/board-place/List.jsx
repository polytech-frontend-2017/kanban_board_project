import React,{Component} from 'react'
import ListComponent from './listComp'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class List extends Component{
    render()
    {
        return(  <div className="app">
            <ListComponent id='todo' title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")}/>
            <ListComponent  id='in-progress' title="In Progress" cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
            <ListComponent id='done' title='Done' cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        )
    }
}
List.PropTypes={
    cards:PropTypes.arrayOf(PropTypes.object)
};
export default List