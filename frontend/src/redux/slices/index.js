import { combineReducers } from "redux";

import { loginSlice } from "./loginSlices";

export * from './loginSlices';


export const LoginReducer = combineReducers({
    login: loginSlice.reducer
});