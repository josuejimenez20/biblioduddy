import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    error: null,
    success: null,
};

export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {
        fetchRegister: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchRegisterSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = action.payload;
        },
        fetchRegisterFailure: (state, action) => {
            state.error = action.payload;
            state.loading = null;
            state.success = null;
        }
    }
});

export const {
    fetchRegister,
    fetchRegisterFailure,
    fetchRegisterSuccess
} = registerSlice.actions;