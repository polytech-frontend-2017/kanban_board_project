import React, { Component } from 'react'
import SearchPerson from './AddPerson'

class Person extends Component {
  constructor (props) {
    super(props)
    this.ShowAddPersonBlock = this.ShowAddPersonBlock.bind(this)
    this.HideAddPersonBlock = this.HideAddPersonBlock.bind(this)
    this.state = {IsShowPerson: false}
  }
  ShowAddPersonBlock () {
    this.setState({IsShowPerson: true})
  }
  HideAddPersonBlock () {
    this.setState({IsShowPerson: false})
  }
  render () {
    const IsShowPerson = this.state.IsShowPerson
    let button = null
    if (IsShowPerson) {
      button = <HidePersonBlock onClick={this.HideAddPersonBlock} />
    } else {
      button = <ShowPersonBlock onClick={this.ShowAddPersonBlock} />
    }
    return (
      <div id="AddPersonDiv">
        {button}
        <Indicator IsShowPerson={IsShowPerson} />

      </div>
    )
  }
}
function Showm (props) {
  return (
    <div id = 'PersonList'>
      <SearchPerson />
    </div>
  )
  // component w/ person
}

function Hidem (props) {
  return (<div ></div>)
}

function Indicator (props) {
  const IsShowPerson = props.IsShowPerson
  if (IsShowPerson) {
    return <Showm />
  }
  return <Hidem />
}
function ShowPersonBlock (props) {
  return (
    <div >
      <button id = "GetUsersList" className = 'CurcleButton' onClick={props.onClick}>
        <img src="./button_img/add-user-button.png" id="AddUser" alt="AddUser"/>
      </button>
    </div>)
}

function HidePersonBlock (props) {
  return (
    <div id="hide">
      <button id = "GetUsersList" className = 'CurcleButton' onClick={props.onClick}>
        <img src="./button_img/add-user-button.png" id="AddUser" alt="AddUser"/>
      </button>
    </div>
  )
}
export default Person
