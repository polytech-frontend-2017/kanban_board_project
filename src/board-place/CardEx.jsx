import React, {Component} from 'react';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'


class Card extends Component{
    render()

    {
        let BackgrounColor={
            backgroundColor: this.props.color
        }

        return(
             <div className="card" draggable="true" style={BackgrounColor}>
                <div className="card_title" >{this.props.title}
                    <br/>
                    {this.props.description}
                </div>
            </div>
        )
    }
};
Card.PropTypes=
{
    id:PropTypes.number,
    title:PropTypes.string,
    description:PropTypes.string,
    color:PropTypes.string
}
export default Card;