import React, { Component } from 'react'
import './TaskForm.css'

class TaskForm extends Component{
    constructor(props) {
        super(props);
        this.state = {task: ''};
      }

      /*updateText = (e => {
        this.setState({task: e.target.value});
      });

      submitForm = (e => {
        e.preventDefault();
        let item = e.target[0].value;
     
      });

      addItem = (item => {
        let newItems = this.state.items;
        newItems.push(item);
        this.setState({items: newItems});
      });*/

    render()
    {
        return(
            <form id="TaskForm"/* SubmitAction={this.addItem} onSubmit={this.submitForm}*/ >
                <input 
                type="text"
                id="TaskName" 
                placeholder="Input some task" 
                /*onChange={this.updateText} */
                autofocus="autofocus" 
                reiqured/>

                <input
                type="submit" 
                id="AddTask" 
                value="Add" />
            </form>
        );
    }
}
/*
class ShowList extends Component{


    render()
    {return();}
}
class Show extends Component{
}*/

export default  TaskForm;