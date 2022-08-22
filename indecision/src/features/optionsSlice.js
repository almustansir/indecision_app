import { createSlice } from "@reduxjs/toolkit";


const optionsData = ["Learn React", "Learn Redux", "Learn FireBase"]

export const optionSlice = createSlice({
    name: "options",
    initialState: {
        value: optionsData
    },
    reducers: {
        addOptions: (state, action) => {
            if(!state.value.includes(action.payload)) {
                state.value.push(action.payload)
            }
        },
        removeAllOptions: (state) => {
            state.value = []
        },
        removeOption: (state, action) => {
            state.value = state.value.filter((value) => action.payload !== value)
        },
    }
})

export const { addOptions, removeAllOptions, removeOption } = optionSlice.actions

export default optionSlice.reducer