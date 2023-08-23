import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { setSearchTerm, selectSearchTerm } from "./searchSlice"
import {loadPosts} from "../posts/postsSlice";

export default function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchChangeHandler = ( e ) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loadPosts())
        dispatch(setSearchTerm(""))
    }

    return (
        <form className="search-box" onSubmit={submitHandler}>
            <input
                className="search-input"
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={onSearchChangeHandler}
            />
            <button>
                <img className="search-icon" src="search-black.svg" alt="logo myReddit"/>
            </button>
        </form>
    )
}