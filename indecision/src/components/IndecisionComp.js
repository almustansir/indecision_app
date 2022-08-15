import React, { Component } from 'react'
import ActionComp from './ActionComp'
import AddOptionComp from './AddOptionComp'
import HeaderComp from './HeaderComp'
import OptionsComp from './OptionsComp'
import OptionModalComp from './OptionModalComp'
import './../styles/style.scss'

export default class IndecisionComp extends Component {
    constructor(props) {
        super(props)
        this.addNewOption = this.addNewOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
        this.actionFunction = this.actionFunction.bind(this)
        this.removeOptionFunction = this.removeOptionFunction.bind(this)
        this.modalCloseFunction = this.modalCloseFunction.bind(this)
    }
    state = {
        // make database
        // should fetch data from database
        "options": ["Learn React", "Learn Redux", "Learn FireBase"],
        "selectedOption": undefined
    }

    modalCloseFunction() {
        this.setState({ selectedOption: undefined })
    }
    
    addNewOption(option) {
        // add to database once connected.
        this.state.options.push(option)
        this.setState({ options: this.state.options })
    }

    // Add Function
    actionFunction(num) {
        // turn this into a mudol later
        const op = this.state.options[num]
        this.setState(() => ({
            selectedOption: op
        }))
    }

    // removeAll function
    removeAllOptions() {
        this.setState({ options: [] })
    }

    // remove function
    removeOptionFunction(removedOption) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return removedOption !== option
            })
        }))
    }
    
    render() {
        return (
            <div>
            <HeaderComp />
            <div className='container'>
                <ActionComp OptionsLength={this.state.options.length} actionFunction={this.actionFunction}/>
                <div className='wedget'>
                    <OptionsComp
                        options={this.state.options}
                        removeAllOptions={this.removeAllOptions}
                        removeOptionFunction={this.removeOptionFunction}
                    />
                    <AddOptionComp addNewOption={this.addNewOption}/>
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
