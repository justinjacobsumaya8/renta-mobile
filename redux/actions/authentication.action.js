import * as SecureStore from "expo-secure-store";
import { authenticationActions } from "../slices/authentication.slice";
import APP from "../../config/app";
import AxiosService from "../../services/AxiosService";
import AuthenticatedUser from "../../models/AuthenticatedUser";

const { setIsLoggingIn, setIsUserLoading, setAuthenticatedUser } =
    authenticationActions;

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(setIsLoggingIn(true));

        try {
            const response = await AxiosService.post("oauth/token", {
                username: email,
                password: password,
                grant_type: "password",
                client_id: APP.BACKEND_API_CLIENT_ID,
                client_secret: APP.BACKEND_API_CLIENT_SECRET,
                scope: "*",
            });

            const {
                access_token: accessToken,
                // refresh_token: refreshToken,
                // expires_in: expiresIn,
            } = response.data;

            await SecureStore.setItemAsync(APP.ACCESS_TOKEN_KEY, accessToken);

            dispatch(setIsLoggingIn(false));
            return Promise.resolve(response);
        } catch (error) {
            dispatch(setIsLoggingIn(false));
            return Promise.reject(error);
        }
    };
};

export const getAuthenticatedUser = () => {
    return async (dispatch) => {
        dispatch(setIsUserLoading(true));

        try {
            const response = await AxiosService.get("api/auth/user");
            const data = AuthenticatedUser.format(response.data.data);

            dispatch(setAuthenticatedUser(data));
            dispatch(setIsUserLoading(false));
            return Promise.resolve(response);
        } catch (error) {
            dispatch(setIsUserLoading(false));
            return Promise.reject(error);
        }
    };
};
