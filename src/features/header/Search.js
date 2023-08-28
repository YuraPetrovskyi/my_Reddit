import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { setSearchTerm, selectSearchTerm } from "./searchSlice"
import {loadPosts} from "../posts/postsSlice";
import {useNavigate} from "react-router-dom";

export default function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const navigate = useNavigate()

    const onSearchChangeHandler = ( e ) => {
        dispatch(setSearchTerm(e.target.value));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/")
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
            <button className="search-button">
                <img className="search-icon" src="/search.svg" alt="search"/>
            </button>
        </form>
    )
}
