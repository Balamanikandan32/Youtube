import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducer from "./appSlice"
import videoReducer from "./videoSlice"
import searchReducer from "./searchSlice";

 const appStore = configureStore({
    reducer : {
        app : appReducer,
        videos: videoReducer,
        cache: searchReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
 })

 export default appStore