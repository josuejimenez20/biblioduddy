import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { LoginReducer } from '../slices/index';

const combineReducer = combineReducers({
    login: LoginReducer
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})