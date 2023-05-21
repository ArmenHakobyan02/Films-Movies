import { configureStore } from "@reduxjs/toolkit";
import FilmsReducer from "./FimlsReducer/FilmsReducer";

const store = configureStore({
    reducer: {
        FilmsReducer
    }
})

export default store