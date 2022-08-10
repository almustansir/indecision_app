import React, { Component } from 'react'
import ActionComp from './ActionComp'
import AddOptionComp from './AddOptionComp'
import HeaderComp from './HeaderComp'
import OptionsComp from './OptionsComp'

export default class IndecisionComp extends Component {
    constructor(props) {
        super(props)
        this.addNewOption = this.addNewOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
    }
    state = {
        // make database
        // should fetch data from database
        "options": ["Learn React", "Learn Redux", "Learn FireBase"]
    }

    
    addNewOption(option) {
        // add to database once connected.
        this.state.options.push(option)
        this.setState({
            options: this.state.options
        })
    }

    // removeAll function
    removeAllOptions() {
        this.setState({
            options: []
        })
    }

    // remove function
    
    
    render() {
        return (
            <div>
            <HeaderComp />
            <ActionComp OptionsLength={this.state.options.length}/>
            <OptionsComp options={this.state.options} removeAllOptions={this.removeAllOptions}/>
            <AddOptionComp addNewOption={this.addNewOption}/>
        </div>
        )
    }
}
