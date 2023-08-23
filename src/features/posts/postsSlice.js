import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import { selectSearchTerm } from "../header/searchSlice";

const urlAPI = 'https://www.reddit.com';
const urlSearch = "https://www.reddit.com/search/?q=";
const limit = ".json?limit=60";
const search = "/search.json?q=";

// const urlSubred = 'https://www.reddit.com/r/announcements';

export  const loadPosts = createAsyncThunk(
    "allPosts/loadPosts",
    async (path = "/best", thunkAPI) => {

        const currentState = thunkAPI.getState();
        console.log('Current state:', currentState);


        console.log(path);

        let data;
        if (currentState.search.length > 0){
            console.log(currentState.search);
            const searchTerms = currentState.search;
            console.log((`${urlSearch}${searchTerms}`))
            data = await fetch(`${urlAPI}${search}${searchTerms}`);
        } else {
            console.log(`${urlAPI}${path}${limit}`)
            data = await fetch(`${urlAPI}${path}${limit}`);
            // data = await fetch(`https://www.reddit.com/subreddits${limit}`);
            //                     https://www.reddit.com/hot.json?limit=60
            //                     https://www.reddit.com/r/announcements';

        }

        const json = await data.json();
        return json.data.children.map((post) => post.data);
    }
)
export const postsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts:[],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const selectAllPosts = (state) => state.allPosts.posts;
export const selectFilteredAllPost = (state) => {
    const searchTerm = selectSearchTerm(state)
    const allPost = selectAllPosts(state);

    return allPost.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};




export default postsSlice.reducer;
