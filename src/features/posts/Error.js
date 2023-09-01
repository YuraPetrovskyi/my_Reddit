import React from "react";
// import {loadPosts} from "./postsSlice";
// import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Error = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate()

    const onTryAgainHandler = () => {
        navigate("/")
    };

    return (
        <div    className="error-container">
            <h2>Ops! Something is wrong! Try again!</h2>
            <button onClick={onTryAgainHandler} className="error-button">
                Go Home
                <img src="/home.svg" alt=""/>
            </button>
        </div>
    );
};

export default Error;

