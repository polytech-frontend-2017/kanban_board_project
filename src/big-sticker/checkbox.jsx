import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Checkbox extends Component {
    static propTypes = {
      checked: PropTypes.bool
    };
    static defaultProps = {
      checked: false
    };
    constructor(props) {
      super(props);
      this.state = {
        checked: props.checked,
      };
    };
  
    handleChange = () => {
      this.setState({
        checked: !this.state.checked
      });
    };
  
    render() {
      const { checked } = this.state;
      return (
        <div>
          <input 
            type="checkbox"
            checked={checked}
            onChange={this.handleChange}
            required
          />
      </div>
      );
    }
  }
  

