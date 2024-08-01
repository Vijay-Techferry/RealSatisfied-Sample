import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";

export const store = configureStore({reducer: {
    loginReducer:loginSlice.reducer,
},})