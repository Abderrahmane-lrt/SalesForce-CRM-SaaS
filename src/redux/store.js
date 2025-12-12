import { configureStore } from "@reduxjs/toolkit";
import OpportunitiesReducer from './OpportinitySlice';

const store = configureStore({
    reducer : OpportunitiesReducer
})
export default store