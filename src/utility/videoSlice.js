import { createSlice } from "@reduxjs/toolkit";

const videoSlice =  createSlice({
    name: "video",
    initialState : {
        video:null,
    },
    reducers:{
        addVideos: (state,action)=>{
            state.video = action.payload
        },
    },
})

export const {addVideos}= videoSlice.actions
export default videoSlice.reducer