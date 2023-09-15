import React from 'react';
import '../App.css';
import Root from "../components/Root";

import Posts from "../features/posts/Posts";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Comments} from "../features/comments/Comments";

const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Posts/>}/>
        <Route path="/search" element={<Posts />} />
        <Route path=":name" element={<Posts/>}/>
        <Route path=":name/:subreddit" element={<Posts/>}/>
        <Route path=":name/:subreddit/comments/:id/:permalink/" element={<Comments />}/>
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router}/>
    );
}
