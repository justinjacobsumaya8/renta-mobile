import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import APP from "../config/app";
import Spinner from "react-native-loading-spinner-overlay";

export default function Loading() {
    const router = useRouter();

    useEffect(() => {
        SecureStore.getItemAsync(APP.ACCESS_TOKEN_KEY).then((token) => {
            if (token) {
                return router.replace("/today");
            } else {
                return router.replace("/login");
            }
        });
    }, []);

    return <Spinner visible={true} />;
}
