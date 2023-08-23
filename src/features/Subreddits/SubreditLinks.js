import React from "react";
import {Link, NavLink} from "react-router-dom";
import { useEffect} from "react";
import { useParams} from "react-router-dom";

export default function SubreditLinks() {

    // const { subcraib } = useParams();
    // console.log(subcraib)


    return (
        <div   className="subredit-list">
            <NavLink to="r/GreatBritishMemes" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/GreatBritishMemes.jpeg" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/GreatBritishMemes
            </NavLink>
            <NavLink to="r/learnprogramming" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/JS.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/javascript
            </NavLink>
            <NavLink to="r/learnpython" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Python.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/Python
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/GreatBritich.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/unitedkingdom
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Scotland.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/Scotland
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/webdevelop.jpg" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/webdev
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/UkraineWor.gif" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/UkrainianConflict
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/AskReddit.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/AskReddit
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Ukraine.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/ukraine
            </NavLink>
            <NavLink to="r/programming" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/programming.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                r/programming
            </NavLink>
        </div>
    )
}