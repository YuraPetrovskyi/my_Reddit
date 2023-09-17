import React from "react";
// import {useLocation} from "react-router-dom";

export function TopButton() {
    // const location = useLocation();
    const scrollTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div >
            <button className="button-top" onClick={scrollTopHandler} aria-label="button let`s up">
                <img src="/icon/subreddits/top_arrow.svg" alt="let`s up" width="60" height="60"/>
            </button>
        </div>
    )
}