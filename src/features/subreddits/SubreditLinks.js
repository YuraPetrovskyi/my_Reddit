import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SubredditLinks() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
        const bodyElement = document.body;
        if (isActive) {
            bodyElement.classList.remove("lock");
        } else {
            bodyElement.classList.add("lock");
        }
    };
    const removeClassActive = () => {
        setIsActive(false);
        const bodyElement = document.body;
        if (isActive) {
            bodyElement.classList.remove("lock");
        }
    };

    const activeClass = isActive ? "active" : "";

    
    
    return (
        <div>
            <button  className="subreddit-title" onClick={toggleClass}>
                Subcredits
            </button>
            <div className={`subreddit-list ${activeClass}`} >
                <div className="subreddits-list-body">
                    <NavLink to="r/GreatBritishMemes" className="subreddit-list-element" onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/GreatBritishMemes.jpeg" alt="logo of subreddit" />
                        </div>
                        <p>r/GreatBritishMemes</p>
                    </NavLink>
                    <NavLink active to="r/javascript" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/JS.png" alt="logo of subreddit" />
                        </div>
                        <p>r/javascript</p>
                    </NavLink>
                    <NavLink to="r/Python" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Python.png" alt="logo of subreddit" />
                        </div>
                        <p>r/Python</p>
                    </NavLink>
                    <NavLink to="r/unitedkingdom" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/GreatBritich.png" alt="logo of subreddit" />
                        </div>
                        <p>r/unitedkingdom</p>
                    </NavLink>
                    <NavLink to="r/Scotland" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Scotland.png" alt="logo of subreddit" />
                        </div>
                        <p>r/Scotland</p>
                    </NavLink>
                    <NavLink to="r/webdev" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/webdevelop.jpg" alt="logo of subreddit" />
                        </div>
                        <p>r/webdev</p>
                    </NavLink>
                    <NavLink to="r/UkrainianConflict" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/UkraineTwo.png" alt="logo of subreddit" />
                        </div>
                        <p>r/UkrainianConflict</p>
                    </NavLink>
                    <NavLink to="r/AskReddit" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/AskReddit.png" alt="logo of subreddit" />
                        </div>
                        <p>r/AskReddit</p>
                    </NavLink>
                    <NavLink to="r/ukraine" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Ukraine.png" alt="logo of subreddit"/>
                        </div>
                        <p>r/ukraine</p>
                    </NavLink>
                    <NavLink to="r/programming" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/programming.png" alt="logo of subreddit" />
                        </div>
                        <p>r/programming</p>
                    </NavLink>
                </div>
                
            </div>
            
        </div>
    )
}