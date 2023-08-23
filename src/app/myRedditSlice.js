import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url = 'https://www.reddit.com';
export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${url}${subreddit}.json?limit=60`)
    const json = await response.json()
    return json.data.children.map((post) => post.data)
}

const initialState = {
    posts: [],
    error: false,
    selectedSubreddit: '/best'
}

const myRedditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action){
            state.posts = action.payload
        },

    }
})

export const { setPosts } = myRedditSlice.actions;
export default myRedditSlice.reducer;

