import React from "react";
import {loadPosts} from "./postsSlice";
import {useDispatch} from "react-redux";

const Error = () => {
    const dispatch = useDispatch();
    const onTryAgainHandler = () => {
        dispatch(loadPosts());
    };

    return (
        <div>
            <h2>Ops! Something is wrong! Try again!</h2>
            <button onClick={onTryAgainHandler}>Try again</button>
        </div>
    );
};

export default Error;

