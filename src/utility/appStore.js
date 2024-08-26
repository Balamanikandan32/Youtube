import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducer from "./appSlice"
import videoReducer from "./videoSlice"
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice"

 const appStore = configureStore({
    reducer : {
        app : appReducer,
        videos: videoReducer,
        cache: searchReducer,
        chat: chatReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
 })

 export default appStore