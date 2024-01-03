import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: null,
};

export const addBookSlice = createSlice({
    name: 'addBookSlice',
    initialState,
    reducers: {
        fetchAddBook: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchAddBookSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.success = action.payload;
        },
        fetchAddBookFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchAddBook,
    fetchAddBookFailure,
    fetchAddBookSuccess
} = addBookSlice.actions;