import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import titleReducer from "./title/titleSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        myTitle: titleReducer,
    },
});
