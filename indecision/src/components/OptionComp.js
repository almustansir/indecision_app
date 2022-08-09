import React, { Component } from 'react'

export default class OptionComp extends Component {
  render() {
    return (
      <div>
        <p>Option: {this.props.optionText}</p>
        <button>Remove</button>
      </div>
    )
  }
}
