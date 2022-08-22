import { useDispatch } from "react-redux";
import { addOptions } from "../features/optionsSlice";

export default function AddOptionComp() {
  const dispatch = useDispatch()
  return (
    <div>
      <form className='add-option' onSubmit={(event) => {
            event.preventDefault()
            const newOption = event.target.elements.option.value.trim()
            event.target.elements.option.value = ""
            if (newOption) {
              return dispatch(addOptions(newOption))
            }
          }}>
        <input className='add-option__input' type="text" name="option"/>
        <button className='button' type="submit">Add Option</button>
      </form>
   </div>
  )
}
