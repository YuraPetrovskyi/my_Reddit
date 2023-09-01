import React from "react";
import { NavLink } from "react-router-dom";

export default function SubredditMenu() {

    return (
        <div>
            <NavLink to="/hot" className="button-subreddit">
                <img className="icon-subreddit" src="/icon/subcred/hot.png" alt=""/>
                <p className="button-subreddit-text">Hot</p>
            </NavLink>
            <NavLink to="/new" className="button-subreddit">
                <img className="icon-subreddit" src="/icon/subcred/new.png" alt=""/>
                <p className="button-subreddit-text">New</p>
            </NavLink>
            <NavLink to="/top" className="button-subreddit">
                <img className="icon-subreddit" src="/icon/subcred/top.svg" alt=""/>
                <p className="button-subreddit-text">Top</p>
            </NavLink>
        </div>
    )
}