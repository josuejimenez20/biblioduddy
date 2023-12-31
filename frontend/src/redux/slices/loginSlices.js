import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: null,
    userData: {}
};

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        fetchLogin: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchLoginSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.userData = action.payload;
        },
        fetchLoginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchLogin,
    fetchLoginFailure,
    fetchLoginSuccess
} = loginSlice.actions;