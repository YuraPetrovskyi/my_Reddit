import React from "react";
import { NavLink } from "react-router-dom";

export default function SubredditLinks() {

    // const { subcraib } = useParams();
    // console.log(subcraib)
    return (
        <div   className="subreddit-list">
            <NavLink to="r/GreatBritishMemes" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/GreatBritishMemes.jpeg" alt="logo of subreddit" />
                </div>
                <p>r/GreatBritishMemes</p>
            </NavLink>
            <NavLink to="r/javascript" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/JS.png" alt="logo of subreddit" />
                </div>
                <p>r/javascript</p>
            </NavLink>
            <NavLink to="r/Python" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/Python.png" alt="logo of subreddit" />
                </div>
                <p>r/Python</p>
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/GreatBritich.png" alt="logo of subreddit" />
                </div>
                <p>r/unitedkingdom</p>
            </NavLink>
            <NavLink to="r/Scotland" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/Scotland.png" alt="logo of subreddit" />
                </div>
                <p>r/Scotland</p>
            </NavLink>
            <NavLink to="r/webdev" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/webdevelop.jpg" alt="logo of subreddit" />
                </div>
                <p>r/webdev</p>
            </NavLink>
            <NavLink to="r/UkrainianConflict" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/UkraineWor.gif" alt="logo of subreddit" />
                </div>
                <p>r/UkrainianConflict</p>
            </NavLink>
            <NavLink to="r/AskReddit" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/AskReddit.png" alt="logo of subreddit" />
                </div>
                <p>r/AskReddit</p>
            </NavLink>
            <NavLink to="r/ukraine" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/Ukraine.png" alt="logo of subreddit"/>
                </div>
                <p>r/ukraine</p>
            </NavLink>
            <NavLink to="r/programming" className="subreddit-list-element">
                <div className="subreddit-list-container">
                    <img src="/programming.png" alt="logo of subreddit" />
                </div>
                <p>r/programming</p>
            </NavLink>
        </div>
    )
}