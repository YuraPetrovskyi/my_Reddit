import { configureStore } from "@reduxjs/toolkit";

import allPostsReducer from "../features/posts/postsSlice";
// import postReducer from "./myRedditSlice";
import modeReducer from "../features/header/modeSlice";
import searchReducer from "../features/header/searchSlice";
import subredditReducer, {subredditSlice} from "../features/Subreddits/subredditSlice";

const store =  configureStore({
    reducer: {
        allPosts: allPostsReducer,
        // posts: postReducer,
        mode: modeReducer,
        search: searchReducer,
        subreddits: subredditReducer
    }
});

// console.log(store.getState())
export default store;