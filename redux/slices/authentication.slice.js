import { createSlice } from "@reduxjs/toolkit";
import AuthenticatedUser from "../../models/AuthenticatedUser";

const initialState = {
    isLoggingIn: false,

    isUserLoading: false,
    authenticatedUser: AuthenticatedUser.format({}),
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        setIsLoggingIn: (state, action) => {
            return {
                ...state,
                isLoggingIn: Boolean(action.payload),
            };
        },
        setIsUserLoading: (state, action) => {
            return {
                ...state,
                isUserLoading: Boolean(action.payload),
            };
        },
        setAuthenticatedUser: (state, action) => {
            return {
                ...state,
                authenticatedUser: action.payload,
            };
        },
    },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
