import { useSelector, useDispatch } from "react-redux";
import { removeAllOptions, removeOption } from '../features/optionsSlice';

export default function OptionsComp() {
  const options = useSelector((state) => state.options.value)
  const dispatch = useDispatch()
  return (
    <div>
        <div className='wedget-header'>
           <h3 className='wedget-header__title'>Your Options</h3>
           <p><button className='button button--link' onClick={() => dispatch(removeAllOptions())}>Remove All</button></p>
       </div>
       <div>
       {options.map((element, index) => (
          <div key={element} className='option'>
            <p className='option__text'>{index+1}. {element}</p>
            <button
              className='button button--link'
              onClick={() => dispatch(removeOption(element))}
            >Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}


