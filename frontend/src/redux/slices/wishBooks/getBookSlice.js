import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: null,
    books: {}
};

export const getBooksSlice = createSlice({
    name: 'getBooksSlice',
    initialState,
    reducers: {
        fetchgetBooks: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchgetBooksSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.books = action.payload;
        },
        fetchgetBooksFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchgetBooks,
    fetchgetBooksFailure,
    fetchgetBooksSuccess
} = getBooksSlice.actions;