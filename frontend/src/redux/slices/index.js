import { combineReducers } from "redux";

import { loginSlice } from "./loginSlices";
import { registerSlice } from "./registerSlices";

export * from './loginSlices';
export * from './registerSlices';


export const LoginReducer = combineReducers({
    login: loginSlice.reducer,
    register: registerSlice.reducer,
});