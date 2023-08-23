import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import HeaderBar from "../features/header/HeaderBar";
import Posts from "../features/posts/Posts";
import PostsTwo from "../features/posts/PostsTwo";

import Subreddits from "../features/Subreddits/Subreddits";
import MyReddit from "../app/MeReddit";


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


