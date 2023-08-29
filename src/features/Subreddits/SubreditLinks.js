import React from "react";
import { NavLink } from "react-router-dom";

export default function SubreditLinks() {

    // const { subcraib } = useParams();
    // console.log(subcraib)
    return (
        <div   className="subredit-list">
            <NavLink to="r/GreatBritishMemes" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/GreatBritishMemes.jpeg" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/GreatBritishMemes</p>
            </NavLink>
            <NavLink to="r/javascript" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/JS.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/javascript</p>
            </NavLink>
            <NavLink to="r/Python" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Python.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/Python</p>
            </NavLink>
            <NavLink to="r/unitedkingdom" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/GreatBritich.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/unitedkingdom</p>
            </NavLink>
            <NavLink to="r/Scotland" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Scotland.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/Scotland</p>
            </NavLink>
            <NavLink to="r/webdev" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/webdevelop.jpg" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/webdev</p>
            </NavLink>
            <NavLink to="r/UkrainianConflict" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/UkraineWor.gif" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/UkrainianConflict</p>
            </NavLink>
            <NavLink to="r/AskReddit" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/AskReddit.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/AskReddit</p>
            </NavLink>
            <NavLink to="r/ukraine" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/Ukraine.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/ukraine</p>
            </NavLink>
            <NavLink to="r/programming" className="subredit-list-element">
                <div className="subredit-list-conteiner">
                    <img src="/programming.png" alt="logo of subreddit" className="subredit-list-logo"/>
                </div>
                <p>r/programming</p>
            </NavLink>
        </div>
    )
}