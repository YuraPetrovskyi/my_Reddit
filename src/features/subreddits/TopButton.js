import React from "react";
// import {useLocation} from "react-router-dom";

export function TopButton() {
    // const location = useLocation();
    const scrollTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div >
            <button className="button-top" onClick={scrollTopHandler} aria-label="button to go up">
                <img src="/icon/subreddits/top_arrow.svg" alt="" width="60" height="60"/>
            </button>
        </div>
    )
}