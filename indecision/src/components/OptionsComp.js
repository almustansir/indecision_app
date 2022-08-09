import React, { Component } from 'react'
import OptionComp from './OptionComp'

export default class OptionsComp extends Component {
  constructor(props) {
    super(props)
    this.removeAllOptions = this.removeAllOptions.bind(this)
  }
  removeAllOptions() {
    // removes all options
    this.props.options.pop()
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <p><button onClick={this.removeAllOptions}>Remove All</button></p>
        {this.props.options.map((option) =>
            <OptionComp key={option} optionText={option}/>
        )}
      </div>
    )
  }
}


