import React from "react";

import Search from "./Search";
import {NavLink} from "react-router-dom";

export default function HeaderBar() {


    return (
        <div className="search-bar">
            <NavLink to="/top" className="logo-container ">
                <img className="icon-logo" src="/icon/navigator/logomyreddit.png" alt="icon logo myReddit"/>
                <p>myReddit</p>
            </NavLink>

            <Search />

        </div>
    )
}


