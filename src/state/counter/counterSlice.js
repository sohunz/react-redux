import { createSlice } from "@reduxjs/toolkit";

// initail state
const initialState = {
    count: 0,
};

// slice function
const couterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

// export
export const { increment, decrement, incrementByAmount, reset } =
    couterSlice.actions;

export default couterSlice.reducer;
