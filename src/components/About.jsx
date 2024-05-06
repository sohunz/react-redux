import React from "react";
import useCounter from "../hooks/useCounter";

const About = () => {
    const { count } = useCounter();

    return (
        <div className="flex justify-between border mb-5">
            <div className="flex items-center space-x-5 py-3">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="flex items-center space-x-5">
                <p>{count}</p>
                <p>Log Out</p>
            </div>
        </div>
    );
};

export default About;
