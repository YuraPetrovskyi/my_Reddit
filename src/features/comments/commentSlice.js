import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadPosts} from "../posts/postsSlice";
// import * as path from "path";

const urlAPI = 'https://www.reddit.com';

export  const loadComments = createAsyncThunk(
    "allComments/loadComments",
    async (compath="", thunkAPI) => {

        const currentState = thunkAPI.getState();
        console.log('Current state loadComments:', currentState);

        const data = await fetch(`${urlAPI}${compath}.json`);
        console.log(`${urlAPI}${compath}.json`)

        const json = await data.json();
        console.log("json is: ", json[1].data.children);

        return json[1].data.children;
    }
)

export const commentSlice = createSlice({
    name: 'allComments',
    initialState: {
        comments:[],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default commentSlice.reducer;