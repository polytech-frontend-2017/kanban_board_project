import React, { Component } from 'react'
import './ShowHide.css'
import List from './TaskForm'
class ButtonCheckDivs extends Component {
  constructor(props) {
    super(props);
    this.onBlock = this.onBlock.bind(this);
    this.offBlock = this.offBlock.bind(this);
    this.state = {IsShow: false};
  }
  
  onBlock() {
    this.setState({IsShow: true});
  }
  
  offBlock() {
    this.setState({IsShow: false});
  }
  render () {
    const IsShow = this.state.IsShow;
    let button = null;
    if(IsShow){
      button = <Hide  onClick={this.offBlock} /> 
    } 
    else {
      button = <Show onClick={this.onBlock} />
    }
    return (
      <div id="ButtonCheckDivs">
        <Indicator IsShow={IsShow} />
        {button}
      </div>
     )
  }
}
function Showm(props) {
  return  (
  <div id = 'TaskList'>
    <div id="task"> <List /></div>
  </div>
  );
  //здесь подключим компонент с тасками
}

function Hidem(props) {
  return ( <div id = 'TaskLists' ></div>);
}

function Indicator(props) {
  const IsShow = props.IsShow;
  if(IsShow){
    return <Showm />;
  }
  return <Hidem />;
}
function Show(props) {
  return (<div id="show"><button id="GetCheckList" className = 'CurcleButton' onClick={props.onClick}> <img src="./button_img/list.png" id="GetCheckListImg" alt="checkedList"/>
  </button></div>);
}

function Hide(props) {
  return (
    <div id="hide">
      <button id="GetCheckList" className = 'CurcleButton' onClick={props.onClick}> 
        <img src="./button_img/list.png" id="GetCheckListImg" alt="checkedList"/>
      </button>
    </div>
  );
}
  export default ButtonCheckDivs;