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
                <img src="/top_arrow.svg" alt=""/>
            </button>
        </div>
    )
}