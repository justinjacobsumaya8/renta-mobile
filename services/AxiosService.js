import APP from "../config/app";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import CustomError from "../models/CustomError";

const instance = axios.create({
    baseURL: APP.API_URL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";
instance.interceptors.request.use(async (config) => {
    const token = await SecureStore.getItemAsync(APP.ACCESS_TOKEN_KEY);

    token ? (config.headers.Authorization = `Bearer ${token}`) : "";
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(CustomError.format(error));
    }
);

export default instance;
