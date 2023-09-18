import React from "react";
import { NavLink } from "react-router-dom";

export default function SubredditMenu() {

    return (
        <div className="button-subreddit-container">
            <NavLink to="/hot" className="button-subreddit" aria-label="Hot">
                <img className="icon-subreddit" src="/icon/subcred/hot.png" alt="icon Hot" />
                <p className="button-subreddit-text">Hot</p>
            </NavLink>
            <NavLink to="/new" className="button-subreddit" aria-label="New">
                <img className="icon-subreddit" src="/icon/subcred/new4.png" alt="icon New"/>
                <p className="button-subreddit-text">New</p>
            </NavLink>
            <NavLink to="/top" className="button-subreddit" aria-label="Top">
                <img className="icon-subreddit" src="/icon/subcred/top.svg" alt="icon Top"/>
                <p className="button-subreddit-text">Top</p>
            </NavLink>
        </div>
    )
}