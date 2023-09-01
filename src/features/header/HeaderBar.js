import React from "react";

import {useSelector, useDispatch} from "react-redux";
// import {changeIcon, changeButton} from "./modeSlice";
import Search from "./Search";
import {NavLink} from "react-router-dom";

export default function HeaderBar() {
    // const dispatch = useDispatch();
    // const icon = useSelector(state => state.mode.icon);
    // const button = useSelector(state => state.mode.button);
    // const changeMode = () => {
    //     icon === "muun-sun.svg" ?
    //         dispatch(changeIcon("sun-muun.svg"))
    //         :
    //         dispatch(changeIcon("muun-sun.svg"))
    //     button === "dayon.svg" ?
    //         dispatch(changeButton("dayoff.svg"))
    //         :
    //         dispatch(changeButton("dayon.svg"))
    // }

    // change mode using DOM"buttonsun.svg"
    // const onChangemodeHandler = () => {
    //     const buttonElement = document.getElementById("change-mode-button");
    //     buttonElement.setAttribute("src", "buttonsun.svg");
    //     const iconElement = document.getElementById("change-mode-icon");
    //     iconElement.setAttribute("src", "sun-muun.svg");
    // }

    return (
        <div className="search-bar">
            <NavLink to="/top" className="logo-container ">
                <img className="icon-logo" src="/icon/navigator/logomyreddit.png" alt="icon logo myReddit"/>
                <p>myReddit</p>
            </NavLink>

            <Search />
            {/*<div className="search-container">*/}

            {/*    */}

            {/*    /!*<div className="mode-container">*!/*/}
            {/*    /!*    <img id="change-mode-icon" className="sun-mode" src={icon} alt=" type mode"/>*!/*/}
            {/*    /!*    <button*!/*/}
            {/*    /!*        onClick={changeMode}*!/*/}
            {/*    /!*        type="button"*!/*/}
            {/*    /!*    >*!/*/}
            {/*    /!*        <img id="change-mode-button" className="sun-mode-button" src={button} alt=" button change type mode"/>*!/*/}
            {/*    /!*    </button>*!/*/}
            {/*    /!*</div>*!/*/}

            {/*</div>*/}
        </div>
    )
}


