import { createSlice } from "@reduxjs/toolkit";

const initialState=
{
    isLoading:true,
}
export const LoadingSlice=createSlice({
    name:'Loading',
    initialState,
    reducers:
    {
        fetchdone:(state)=>
        {
            state.isLoading=false;
        },
        fetching:(state)=>
        {
            state.isLoading=true;
        }
    }
});

export const {fetchdone,fetching}=LoadingSlice.actions;
export const selectLoading=(state)=>state.Loading.isLoading;
export default LoadingSlice.reducer;