import { createSlice } from "@reduxjs/toolkit";

const initialState = "Hello";

const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
        showTitle: (state) => {
            state;
        },
    },
});

export const { showTitle } = titleSlice.actions;

export default titleSlice.reducer;
