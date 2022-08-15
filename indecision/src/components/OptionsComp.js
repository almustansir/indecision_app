import React, { Component } from 'react'
import OptionComp from './OptionComp'

export default class OptionsComp extends Component {
  constructor(props) {
    super(props)
    this.removeAllOptions = this.removeAllOptions.bind(this)
  }
  removeAllOptions() {
    // removes all options
    this.props.removeAllOptions()
  }
  render() {
    return (
      <div>
        <div className='wedget-header'>
          <h3 className='wedget-header__title'>Your Options</h3>
          <p><button className='button button--link' onClick={this.removeAllOptions}>Remove All</button></p>
        </div>
          {this.props.options.map((option, index) =>
              <OptionComp 
                key={option}
                optionText={option}
                count={index+1}
                removeOptionFunction={this.props.removeOptionFunction}
              />
            )}
      </div>
    )
  }
}


