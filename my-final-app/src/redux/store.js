import { configureStore } from "@reduxjs/toolkit";
import { natureReducer } from "./slice";

const store = configureStore({
    reducer: {
        nature: natureReducer
    }
})

export default store;