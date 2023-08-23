import React from 'react';
import '../App.css';
import Root from "../components/Root";

import Posts from "../features/posts/Posts";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route path="" element={<Posts/>}/>
        <Route path=":name" element={<Posts/>}/>
        <Route path=":name/:subredit" element={<Posts/>}/>
    </Route>
))

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}


