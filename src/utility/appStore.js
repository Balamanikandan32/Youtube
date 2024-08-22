import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducer from "./appSlice"
import videoReducer from "./videoSlice"

 const appStore = configureStore({
    reducer : {
        app : appReducer,
        videos: videoReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
 })

 export default appStore