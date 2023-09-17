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
            <button  className="subreddit-title" onClick={toggleClass} aria-label="button subreddits">
                Subreddits
            </button>
            <div className={`subreddit-list ${activeClass}`} data-testid="subreddits-list-container">
                <div className="subreddits-list-body">
                    <NavLink to="r/GreatBritishMemes" className="subreddit-list-element" onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/GreatBritishMemes.jpeg" alt="icon of subreddit r/GreatBritishMemes" />
                        </div>
                        <p>r/GreatBritishMemes</p>
                    </NavLink>
                    <NavLink to="r/javascript" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/JS.png" alt="icon of subreddit r/javascript" />
                        </div>
                        <p>r/javascript</p>
                    </NavLink>
                    <NavLink to="r/Python" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Python.png" alt="icon of subreddit r/Python" />
                        </div>
                        <p>r/Python</p>
                    </NavLink>
                    <NavLink to="r/unitedkingdom" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/GreatBritich.png" alt="icon of subreddit r/unitedkingdom" />
                        </div>
                        <p>r/unitedkingdom</p>
                    </NavLink>
                    <NavLink to="r/Scotland" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Scotland.png" alt="icon of subreddit r/Scotland" />
                        </div>
                        <p>r/Scotland</p>
                    </NavLink>
                    <NavLink to="r/webdev" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/webdevelop.jpg" alt="icon of subreddit r/webdev" />
                        </div>
                        <p>r/webdev</p>
                    </NavLink>
                    <NavLink to="r/UkrainianConflict" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/UkraineTwo.png" alt="icon of subreddit r/UkrainianConflict" />
                        </div>
                        <p>r/UkrainianConflict</p>
                    </NavLink>
                    <NavLink to="r/AskReddit" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/AskReddit.png" alt="icon of subreddit r/AskReddit" />
                        </div>
                        <p>r/AskReddit</p>
                    </NavLink>
                    <NavLink to="r/ukraine" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/Ukraine.png" alt="icon of subreddit r/ukraine"/>
                        </div>
                        <p>r/ukraine</p>
                    </NavLink>
                    <NavLink to="r/programming" className="subreddit-list-element"  onClick={removeClassActive}>
                        <div className="subreddit-list-container">
                            <img src="/icon/subreddits/programming.png" alt="icon of subreddit r/programming" />
                        </div>
                        <p>r/programming</p>
                    </NavLink>
                </div>
                
            </div>
            
        </div>
    )
}