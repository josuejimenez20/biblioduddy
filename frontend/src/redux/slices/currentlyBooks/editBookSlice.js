import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    error: null,
    success: null,
    bookData: {}
};

export const editBookSlice = createSlice({
    name: 'editBookSlice',
    initialState,
    reducers: {
        fetchEditBook: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchEditBookSuccess: (state, action) => {
            state.loading = null;
            state.error = null;
            state.success = true;
        },
        fetchEditBookFailure: (state, action) => {
            state.error = action.payload;
            state.loading = null;
            state.success = null;
        },
        fillBookData: (state, action) => {
            state.bookData = action.payload;
        },
        stateReset: (state, action) => {
            state.loading = null;
            state.error = null;
            state.success = null;
            state.bookData = null;
        }
    }
});

export const {
    fetchEditBook,
    fetchEditBookFailure,
    fetchEditBookSuccess,
    fillBookData,
    stateReset
} = editBookSlice.actions;