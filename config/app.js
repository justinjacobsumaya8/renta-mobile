import { Platform } from "react-native";
import {
    APP_NAME,
    API_URL_ANDROID,
    API_URL_IOS,
    ACCESS_TOKEN_KEY,
    BACKEND_API_CLIENT_ID,
    BACKEND_API_CLIENT_SECRET,
} from "@env";

const IOS = "ios";

const APP = {
    // App Name
    NAME: APP_NAME && APP_NAME !== "" ? APP_NAME : "Kaddy",

    // Backend URL
    API_URL: Platform.OS === IOS ? API_URL_IOS : API_URL_ANDROID,

    // Cookie Key for Access Token
    ACCESS_TOKEN_KEY: ACCESS_TOKEN_KEY ?? "backend-api.access-token",

    // Backend API OAuth Credentials
    BACKEND_API_CLIENT_ID: BACKEND_API_CLIENT_ID,
    BACKEND_API_CLIENT_SECRET: BACKEND_API_CLIENT_SECRET,
};

export default APP;
