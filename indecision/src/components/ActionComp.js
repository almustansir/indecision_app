import React, { Component } from 'react'

export default class ActionComp extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // selects a random option
    alert(this.props.OptionsLength)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What Should I Do?</button>
      </div>
    )
  }
}
