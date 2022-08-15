import React, { Component } from 'react'

export default class AddOptionComp extends Component {
  constructor(props) {
    super(props)
    this.submitFunc = this.submitFunc.bind(this)
  }
  submitFunc(event) {
    event.preventDefault()
    const newOption = event.target.elements.option.value.trim()
    event.target.elements.option.value = ""
    if (newOption) {
      return this.props.addNewOption(newOption)
    }
  }
  render() {
    return (
      <div>
        <form className='add-option' onSubmit={this.submitFunc}>
          <input className='add-option__input' type="text" name="option"/>
          <button className='button' type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}
