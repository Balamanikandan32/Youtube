import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducer from "./appSlice"

 const appStore = configureStore({
    reducer : {
        app : appReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
 })

 export default appStore