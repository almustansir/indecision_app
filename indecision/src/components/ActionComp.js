import React, { Component } from 'react';

export default class ActionComp extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // selects a random option
    const random_num = Math.floor(Math.random() * this.props.OptionsLength)
    this.props.actionFunction(random_num)
  }
  render() {
    return (
      <div>
        <button className='big-button' onClick={this.handleClick}>What Should I Do?</button>
      </div>
    )
  }
}
