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
        <form onSubmit={this.submitFunc}>
          <input type="text" name="option"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
