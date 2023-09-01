import React from "react";
import {useLocation} from "react-router-dom";

export function TopButton() {
    const location = useLocation();
    const scrollTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="button-top-container">
            <button className="button-top" onClick={scrollTopHandler}>
                <img src="/top_arrow.svg" alt=""/>
            </button>
        </div>
    )
}