import { configureStore } from "@reduxjs/toolkit";

import allPostsReducer from "../features/posts/postsSlice";
import searchReducer from "../features/header/searchSlice";
import subredditReducer from "../features/subreddits/subredditSlice";
import commentReducer from "../features/comments/commentSlice";

const store =  configureStore({
    reducer: {
        allPosts: allPostsReducer,
        search: searchReducer,
        subreddits: subredditReducer,
        allComments: commentReducer
    }
});

// console.log(store.getState())
export default store;