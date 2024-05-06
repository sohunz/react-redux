import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
} from "../state/counter/counterSlice";

const Home = () => {
    const count = useSelector((state) => state.counter.count);

    const hisTitle = useSelector((state) => state.myTitle);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(2));
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div>
            <p> {hisTitle}</p>
            <p>{count}</p>
            <button onClick={handleIncrement}>increment</button>
            <br />
            <br />
            <button onClick={handleDecrement}>decrement</button>
            <br />
            <br />
            <button onClick={handleIncrementByAmount}>
                incremement by amount
            </button>
            <br />
            <br />
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Home;
