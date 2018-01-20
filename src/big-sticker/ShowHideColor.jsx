import React, { Component } from 'react'
import './style/ShowHideColor.css'
// import Color from './'

class Color extends Component {
  constructor (props) {
    super(props)
    this.OnColor = this.OnColor.bind(this)
    this.OffColor = this.OffColor.bind(this)
    this.state = {isColor: false}
  }

  OnColor (e) {
    this.setState({isColor: true})
  }

  OffColor () {
    this.setState({isColor: false})
  }

  render () {
    const isColor = this.state.isColor
    let button = null
    if (isColor) {
      button = <Hide onClick={this.OffColor}/>
    } else {
      button = <Show onClick={this.OnColor}/>
    }

    return (
      <div id="ColorDiv">
        {button}
        <Indicator isColor={isColor}/>
      </div>
    )
  }
}

function Showm (props) {
  return (

    <div className="showColor">
      <button className="button" id="green" ></button>
      <button className="button" id="pink"></button>
      <button className="button" id="yelluw"></button>
    </div>)
}

function Hidem (props) {
  return (<div></div>)
}

function Indicator (props) {
  const isColor = props.isColor
  if (isColor) {
    return <Showm />
  }
  return <Hidem />
}
function Show (props) {
  return (
    <div >
      <button id="ChangeColour" className = 'CurcleButton' onClick={props.onClick}>
        <img src="./button_img/paint-bucket.png" id="PaintBucket" alt="PaintBucket"/>
      </button>
    </div>)
}
function Hide (props) {
  return (
    <div >
      <button id="ChangeColour" className = 'CurcleButton' onClick={props.onClick}>
        <img src="./button_img/paint-bucket.png" id="PaintBucket" alt="PaintBucket"/>
      </button>
    </div>)
}
export default Color
