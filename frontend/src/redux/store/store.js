import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { LoginReducer } from '../slices/index';
import { CurrentlyReducer } from '../slices/currentlyBooks/index';
import { PendingReducer } from '../slices/pendingBooks/index';
import { HistoryReducer } from '../slices/historyBooks/index';
import { WishReducer } from '../slices/wishBooks/index';

const combineReducer = combineReducers({
    login: LoginReducer,
    currently: CurrentlyReducer,
    pending: PendingReducer,
    history: HistoryReducer,
    wish: WishReducer,

});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})