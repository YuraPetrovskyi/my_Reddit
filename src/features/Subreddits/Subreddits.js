import React from "react";

import { NavLink } from 'react-router-dom';

// import {useDispatch} from "react-redux";
// import {useParams} from "react-router-dom";
import SubreditLinks from "./SubreditLinks";

export default function Subreddits() {
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


    return (
        <div className={"subreddits_bar"}>
            {/*<button onClick={sendHadler} className="button-subreddit">*/}
            {/*    <img className="icon-subreddits" src="/hot.png" alt=""/>*/}
            {/*    <p className="button-subreddit-text">Hot</p>*/}
            {/*</button>*/}
            {/*<button onClick={sendHadlerTwo}>*/}
            {/*    <img className="icon-subreddits" src="/hot.png" alt=""/>*/}
            {/*    <p className="button-subreddit-text">New</p>*/}
            {/*</button>*/}
            <NavLink to="/hot" className="button-subreddit">
                <img className="icon-subreddits" src="/icon/subcred/hot.png" alt=""/>
                <p className="button-subreddit-text">Hot</p>
            </NavLink>
            <NavLink to="/new" className="button-subreddit">
                <img className="icon-subreddits" src="/icon/subcred/new.png" alt=""/>
                <p className="button-subreddit-text">New</p>
            </NavLink>
            <NavLink to="/top" className="button-subreddit">
                <img className="icon-subreddits" src="/icon/subcred/top.svg" alt=""/>
                <p className="button-subreddit-text">Top</p>
            </NavLink>
            <div className="subreddits_topics">
                <h2>Subcredit</h2>
            </div>
            <SubreditLinks/>
        </div>
    )
}