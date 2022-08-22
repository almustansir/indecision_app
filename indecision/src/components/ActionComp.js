import { useSelector } from "react-redux";
import OptionModalComp from "./OptionModalComp";

export default function ActionComp() {
  const options = useSelector((state) => state.options.value)
  let selectedOption = ''
  let checkerBol= false
  return (
    <div>
      <button className='big-button' onClick={() => {
        const random_num = Math.floor(Math.random() * options.length)
        selectedOption = options[random_num]
        checkerBol = true
      }}>What Should I Do?</button>

      <OptionModalComp selectedOption={selectedOption} />

    </div>
  )
}




// import React, { Component } from 'react'

// export default class ActionComp extends Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     // selects a random option
//     const random_num = Math.floor(Math.random() * this.props.OptionsLength)
//     this.props.actionFunction(random_num)
//   }
//   render() {
//     return (
//       <div>
//         <button className='big-button' onClick={this.handleClick}>What Should I Do?</button>
//       </div>
//     )
//   }
// }
