import React, { Component } from 'react'
import 'normalize.css/normalize.css'
import HeaderComp from './components/HeaderComp';
import ActionComp from './components/ActionComp';
import OptionsComp from './components/OptionsComp';
import AddOptionComp from './components/AddOptionComp';
// import OptionModalComp from './components/OptionModalComp';
import "./styles/style.scss"

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.actionFunction = this.actionFunction.bind(this)
  //   this.modalCloseFunction = this.modalCloseFunction.bind(this)
  // }

  // state = {
  //   // make database
  //   // should fetch data from database
  //   "options": ["Learn React", "Learn Redux", "Learn FireBase"],
  //   "selectedOption": undefined
  // }

  // modalCloseFunction() {
  //     this.setState({ selectedOption: undefined })
  // }


  // Add Function
  // actionFunction(num) {
  //     // turn this into a mudol later
  //     const op = this.state.options[num]
  //     this.setState(() => ({
  //         selectedOption: op
  //     }))
  // }


  render() {
    return (
      <div>
        <HeaderComp />
            <div className='container'>
                {/* <ActionComp OptionsLength={this.state.options.length} actionFunction={this.actionFunction}/> */}
                <ActionComp />
                <div className='wedget'>
                    <OptionsComp />
                    <AddOptionComp />
                </div>
            </div>
            {/* <OptionModalComp
                selectedOption={this.state.selectedOption}
                modalCloseFunction={this.actionFunction}
            /> */}
      </div>
    )
  }
}