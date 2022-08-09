import React, { Component } from 'react'
import ActionComp from './ActionComp'
import AddOptionComp from './AddOptionComp'
import HeaderComp from './HeaderComp'
import OptionsComp from './OptionsComp'

export default class IndecisionComp extends Component {
    state = {
        "options": ["Learn React", "Learn Redux", "Learn Firefox"]
    }
    render() {
        return (
        <div>
            <HeaderComp />
            <ActionComp OptionsLength={this.state.options.length}/>
            <OptionsComp options={this.state.options}/>
            <AddOptionComp />
        </div>
        )
    }
}
