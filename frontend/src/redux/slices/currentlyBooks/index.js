import { combineReducers } from "redux";

import { addBookSlice } from "./addBookSlices";
import { getBooksSlice } from "./getBooksSlices";
import { editBookSlice } from "./editBookSlice";

export * from './addBookSlices';
export * from './getBooksSlices';
export * from './getBooksSlices';


export const CurrentlyReducer = combineReducers({
    add: addBookSlice.reducer,
    get: getBooksSlice.reducer,
    edit: editBookSlice.reducer,
});