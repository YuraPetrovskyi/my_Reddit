import React from "react";
import {Outlet} from "react-router-dom";

import HeaderBar from "../features/header/HeaderBar";

import Subreddits from "../features/Subreddits/Subreddits";


export default function Root() {

    // const topic = useSelector(selectTopics);
    // console.log(topic);
    return (
        <>
          <HeaderBar />
          <Subreddits/>
          <Outlet/>
        </>

    )
};


