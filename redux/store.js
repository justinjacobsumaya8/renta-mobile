import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authentication.slice";

const combinedReducer = combineReducers({
    authentication: authenticationSlice.reducer,
});

const rootReducer = (state, action) => {
    // Check if action is for logout, then reset all reducers
    // if (action.type === "authentication/saveLogout") {
    //     state = undefined;
    // }
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
