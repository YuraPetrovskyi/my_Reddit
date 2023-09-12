import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {setSearchValue, setSearchTerm, selectSearchValue} from "./searchSlice";
import {useNavigate} from "react-router-dom";

// import {createSearchParams } from 'react-router-dom';

export default function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchValue = useSelector(selectSearchValue).toString();

    const onSearchChangeHandler = ( e ) => {
        dispatch(setSearchValue(e.target.value));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("searchValue: ", searchValue);
        // const query = {
        //     q: searchValue
        // }
        // const queryString = createSearchParams(query).toString();
        // const queryString = `q=${encodeURIComponent(searchValue)}`;
        // navigate({
        //     pathname: "/search/",
        //     search: `?${queryString}`
        // });
        navigate(`/search/?q=${searchValue}`)
        dispatch(setSearchTerm(searchValue));
        dispatch(setSearchValue(""));
    }

    return (
        <form className="search-box" onSubmit={submitHandler}>
            <input
                className="search-input"
                type="text"
                placeholder='Search'
                value={searchValue}
                onChange={onSearchChangeHandler}
            />
            <button className="search-button">
                <img className="search-icon" src="/icon/navigator/search.svg" alt="search"/>
            </button>
        </form>
    )
}

// import React,  { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { setSearchValue, setSearchTerm } from "./searchSlice";
// import { useNavigate } from "react-router-dom";
//
// import { createSearchParams } from 'react-router-dom';
//
// export default function Search() {
//     const searchInputRef = useRef()
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     // const searchValue = useSelector(selectSearchValue);
//
//     const onSearchChangeHandler = ( e ) => {
//         dispatch(setSearchValue(e.target.value));
//     }
//     const submitHandler = (e) => {
//         e.preventDefault();
//         const query = {
//             q: searchInputRef.current.value,
//         };
//         const queryString = createSearchParams(query).toString();
//         navigate({
//             pathname: '/search/',
//             search: `?${queryString}`,
//         });
//         dispatch(setSearchTerm(searchInputRef.current.value));
//         searchInputRef.current.value = "";
//         // dispatch(setSearchValue(""));
//     }
//
//     return (
//         <form className="search-box" onSubmit={submitHandler}>
//             <input
//                 className="search-input"
//                 type="text"
//                 placeholder='Search'
//                 ref={searchInputRef}
//                 onChange={onSearchChangeHandler}
//             />
//             <button className="search-button">
//                 <img className="search-icon" src="/search.svg" alt="search"/>
//             </button>
//         </form>
//     )
// }
