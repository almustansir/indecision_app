import React, { Component } from 'react'

export default class AddOptionComp extends Component {
  submitFunc(e) {
    e.preventDefault()
    const newOption = e.target.elements.option.value.trim()
    if (newOption) {
      // add it to the options state
      console.log(newOption);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitFunc}>
          <input type="text" name='option'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
