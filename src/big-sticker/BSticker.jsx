import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './BSticker.css'
import ToDoList from './ToDoList'
import MainStickerField from './MainStickerField'
import UserList from './UserList'
import ButtonCheckDivs from './ShowHideBlock'

class ButtonCheckDiv extends Component {
  render () {
    return (
      <div id = 'ButtonCheckDiv'>
        <button id = 'GetCheckList' className = 'CurcleButton'>
          <img src="./button_img/list.png" id="GetCheckListImg" alt="checkedList"/>
        </button>
      </div>
    )
  }
}
/*class AddUSer extends Component{
  render()
  {
    return(
      <button id = "GetUsersList" className = 'CurcleButton'>
      <img src="./button_img/add-user-button.png" id="AddUser" alt="AddUser"/>
      </button>
    );
  }
}

class RemoveStic extends Component{
  render()
  {
    return(
        <button id = "RemoveSticker" className = 'CurcleButton'>
        <img src="./button_img/rubbish-bin.png" id="RemoveStic" alt="RemoveSticker"/>
        </button>
    );
  }
}

*/

class Color extends Component{
  render(){return(
      <div class="Color">
      
        <input type="checkbox" id="check"/>
          <button id = "ChangeColour" className = 'CurcleButton'>
            <label for="check">
            <img src="./button_img/paint-bucket.png" id="PaintBucket" alt="PaintBucket"/>
            </label>
          </button>          

        <div class="block">
        <button class="but" id="green" ></button>
        <button class="but" id="pink"></button> 
        <button class="but" id="yelluw"></button> 
        </div>
       </div> 
    );
  }
}



class ButtonUsersDiv extends Component {
  render () {
    return (
      <div id = 'ButtonUsersDiv'>
        <button id = "GetUsersList" className = 'CurcleButton'>
        <img src="./button_img/add-user-button.png" id="AddUser" alt="AddUser"/>
        </button>
        <Color/>
        <button id = "RemoveSticker" className = 'CurcleButton'>
        <img src="./button_img/rubbish-bin.png" id="RemoveStic" alt="RemoveSticker"/>
        </button>
      </div>
    )
  }
}

/*
<ToDoList/>
  <ButtonCheckDiv/>
  <MainStickerField
    onClickClose = {this.props.onClickClose}
  />
    <ButtonUsersDiv/>
  <UserList/>*/
  /* <div>
      <div id="Userpad"> <AddUSer/></div>
      <div><Color/></div>
      <div id="removepad"><RemoveStic/></div>
</div>*/
class BigSticker extends Component {
  render () {
    return (
      <div id = 'BigSticker'>
         <ButtonCheckDivs/>
        <MainStickerField onClickClose = {this.props.onClickClose}/>
        <ButtonUsersDiv/>
      </div>
    )
  }
}

export default BigSticker
