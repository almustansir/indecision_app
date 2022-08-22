import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "../features/optionsSlice";

export default configureStore({
    reducer: {
        options: optionsSlice
    }
})
