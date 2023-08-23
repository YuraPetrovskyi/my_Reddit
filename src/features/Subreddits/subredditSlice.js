import { createSlice} from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name: "subreddits",
    initialState: "/new",
    reducers: {
        setSubredit: (state, action) => (
            state = action.payload
        ),
    }
});

export const { setSubreddit } = subredditSlice.actions;

export const selectSubredit = (state) => state.subreddits;

export default subredditSlice.reducer;