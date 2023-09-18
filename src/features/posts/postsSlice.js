import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
const urlAPI = 'https://www.reddit.com';

export  const loadPosts = createAsyncThunk(
    "allPosts/loadPosts",
    async (path, thunkAPI) => {

        // const currentState = thunkAPI.getState();
        // console.log('Current state with postSlice:', currentState);
        // console.log('адреса фiтчу',`${urlAPI}${path}`)

        const data = await fetch(`${urlAPI}${path}`);
        const json = await data.json();
        return json.data.children.map((post) => post.data);
    }
)
const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
};
export const postsSlice = createSlice({
    name: 'allPosts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadPosts.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },

});
export default postsSlice.reducer;


// import { selectSearchTerm } from "../header/searchSlice";
// import { useSearchParams } from 'react-router-dom';

// const urlSearch = "https://www.reddit.com/search/?q=";
// const limit = ".json?limit=60";
// const search = "/search.json?q=";

// export const selectFilteredAllPost = (state) => {
//     const searchTerm = selectSearchTerm(state)
//     const allPost = selectAllPosts(state);
//
//     return allPost.filter((post) =>
//         post.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
// };

// console.log(path);


// if (currentState.search.searchterm.length > 0){
//     console.log(currentState.search.searchterm);
//     const searchTerms = currentState.search.searchterm;
//     console.log((`${urlSearch}${searchTerms}`))
//     data = await fetch(`${urlAPI}${search}${searchTerms}`);
// } else {
//     console.log(`${urlAPI}${path}${limit}`)
//     data = await fetch(`${urlAPI}${path}${limit}`);
//
// }

// extraReducers: {
//     [loadPosts.pending]: (state) => {
//         state.isLoading = true;
//         state.hasError = false;
//     },
//     [loadPosts.fulfilled]: (state, action) => {
//         state.posts = action.payload;
//         state.isLoading = false;
//         state.hasError = false;
//     },
//     [loadPosts.rejected]: (state) => {
//         state.isLoading = false;
//         state.hasError = true;
//     }
// }