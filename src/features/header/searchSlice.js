import { createSlice} from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: "",
        searchterm: ""
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchterm = action.payload
        },
        setSearchValue: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setSearchTerm,setSearchValue } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchterm;
export const selectSearchValue = (state) => state.search.value;
export default searchSlice.reducer;