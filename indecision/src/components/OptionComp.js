import React, { Component } from 'react'

export default class OptionComp extends Component {
  render() {
    return (
      <div className='option'>
        <p className='option__text'>{this.props.count}. {this.props.optionText}</p>
        <button
          className='button button--link'
          onClick={(e) => {
            this.props.removeOptionFunction(this.props.optionText)
          }}
        >
            Remove
        </button>
      </div>
    )
  }
}
