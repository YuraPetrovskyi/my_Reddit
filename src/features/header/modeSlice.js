import {createSlice} from "@reduxjs/toolkit";

export  const modeSlice = createSlice({
    name: "mode",
    initialState:{
        icon: "sun-muun.svg",
        button: "dayon.svg"
    } ,
    reducers: {
        changeIcon:(state, action) => {
            state.icon = action.payload
        },
        changeButton: (state, action) => {
            state.button = action.payload
        }
    }
});

export const {changeIcon, changeButton} = modeSlice.actions;
export default modeSlice.reducer;