import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        // Define Different reducer as key-value pair
        counterReducer
    } 
})