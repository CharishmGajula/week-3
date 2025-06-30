import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '../Components/Loading/LoadingSlice'
export const store=configureStore({
    reducer:
    {
        Loading:loadingReducer,
    }
});