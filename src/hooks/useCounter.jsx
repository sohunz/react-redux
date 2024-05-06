import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
} from "../state/counter/counterSlice";

const useCounter = () => {
    const count = useSelector((state) => state.counter.count);

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

    const reset = () => {
        dispatch(reset());
    };

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleIncrementByAmount,
        reset,
    };
};

export default useCounter;
