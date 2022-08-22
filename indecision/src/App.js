import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import HeaderComp from './components/HeaderComp';
import ActionComp from './components/ActionComp';
import OptionsComp from './components/OptionsComp';
import AddOptionComp from './components/AddOptionComp';
import OptionModalComp from './components/OptionModalComp';
import "./styles/style.scss";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.actionFunction = this.actionFunction.bind(this)
    this.modalCloseFunction = this.modalCloseFunction.bind(this)
  }

  state = {
    // make database
    // should fetch data from database
    "selectedOption": undefined
  }

  modalCloseFunction() {
      this.setState({ selectedOption: undefined })
  }


  // Add Function
  actionFunction(num) {
      // turn this into a mudol later
      const op = this.props.options[num]
      this.setState(() => ({
          selectedOption: op
      }))
  }


  render() {
    let options = this.props.options
    return (
      <div>
        <HeaderComp />
            <div className='container'>
                <ActionComp OptionsLength={options.length} actionFunction={this.actionFunction}/>
                <div className='wedget'>
                    <OptionsComp />
                    <AddOptionComp />
                </div>
            </div>
            <OptionModalComp
                selectedOption={this.state.selectedOption}
                modalCloseFunction={this.actionFunction}
            />
      </div>
    )
  }
}