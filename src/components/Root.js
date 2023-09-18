import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../features/header/HeaderBar";
import Subreddits from "../features/subreddits/Subreddits";

export default function Root() {

    return (
        <>
            <HeaderBar />
            <main className="main-container">
                <Subreddits/>
                <Outlet/>
            </main>
        </>

    )
};


