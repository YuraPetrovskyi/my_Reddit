import React from "react";


import SubredditLinks from "./SubreditLinks";
import { TopButton } from "./TopButton";
import SubredditMenu from "./SubredditMenu";

export default function Subreddits() {

    return (
        <div className="subreddits-container">
            <SubredditMenu/>
            <h2>Subcredits</h2>
            <SubredditLinks/>
            <div className="button-top-container">
                <TopButton/>
            </div>
        </div>
    )
}


// import { NavLink } from 'react-router-dom';

// import {useDispatch} from "react-redux";
// import {useParams} from "react-router-dom";

// const dispatch = useDispatch();
// const { name, subredit } = useParams();

// useEffect(() => {
//     // console.log(name, subredit);
//     dispatch(setSubredit(`/${name}`))
//     // dispatch(loadPosts(`/${name}`))
// }, [name, subredit]);

// function sendHadler() {
//     dispatch(setSubreddit(`/hohoho`))
//     dispatch(loadPosts(`/top`))
// }
//
// function sendHadlerTwo() {
//     dispatch(setSubredit(`/announcements`))
//     dispatch(loadPosts(`/r/unitedkingdom`))    // }
