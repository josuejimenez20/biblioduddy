import { combineReducers } from "redux";

import { editBookSlice } from "./editBookSlice";
import { getBooksSlice } from "./getBookSlice";
import { addBookSlice } from "./addBookSlice";

export * from './editBookSlice';
export * from './getBookSlice';
export * from './addBookSlice';

export const PendingReducer = combineReducers({
    get: getBooksSlice.reducer,
    edit: editBookSlice.reducer,
    add: addBookSlice.reducer,
});