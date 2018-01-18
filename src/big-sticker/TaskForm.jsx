import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from './checkbox'
import './TaskForm.css'

class Item extends React.Component{
    render() {
      let listItems = this.props.items.map((item, i) => {
        return (
       <li className="LiItem" key={i}>
            <div /* onClick={this.props.clickAction.bind(this, i)}*/ className="delete">
                <Checkbox />
            </div>
            <div className="text">
                {item}
            </div>   
        </li>
          
        );
      });
      return <ul> {listItems}</ul>
    }
  }
class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {task: ''};
      }

    TaskUpdate=(e=>{
        this.setState({task:e.target.value});
    });
    SendForm=(e=>{
        e.preventDefault();
        let taskItem=e.target[0].value;
        this.props.submitAction(taskItem);
        this.setState({task: ''}); 
    });

    render()
    {
        return(
            <form className="TaskForm" onSubmit={this.SendForm} >
                <input 
                type="text"
                id="TaskName" 
                placeholder="Input some task" 
                onChange={this.TaskUpdate}
                value={this.state.task}
                maxlength="21"
                autocomplete="off"
                />
                <input
                type="submit" 
                id="AddTask" 
                value="Add" />
            </form>
        );
    }
}
class Task extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      items: [ ] };
  }
    addNewItem = (taskItem => {
    let newItems = this.state.items;
    newItems.push(taskItem);
    this.setState({items: newItems});
  });

render()
{
  return(
  <div>
      <Todo submitAction={this.addNewItem}/>
      <Item items={this.state.items}/>
   </div>
  )
}
  
}
class List extends React.Component{
    render()
    {
      return(
        <div>
          <Task/>
        </div>
        )
    }
  }

export default  List;