import React from 'react'
import ReactModal from 'react-modal'

export default function OptionModalComp(props) {
  return (
    <ReactModal>
      {<h3>{props.selectedOption}</h3>}
    </ReactModal>
    // <ReactModal
    //     isOpen={!!props.selectedOption}
    //     onRequestClose={props.modalCloseFunction}
    //     ariaHideApp={false}
    //     contentLabel={"Selected Option"}
    //     closeTimeoutMS={200}
    //     className={"modal"}
    // >
    //     <h3 className='modal__title'>Selected Options</h3>
    //     {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
    //     <button className='button' onClick={props.modalCloseFunction}>Okey</button>
    // </ReactModal>
  )
}
