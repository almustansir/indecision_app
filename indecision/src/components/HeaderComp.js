import React, { Component } from 'react'

export default class HeaderComp extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <h1 className='header__title'>Indecision App</h1>
          <h2 className='header__subtitle'>Put your daily life in the hands of a coputer.</h2>
        </div>
      </div>
    )
  }
}
