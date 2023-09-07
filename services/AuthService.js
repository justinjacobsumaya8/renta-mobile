import { useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import APP from "../config/app";

function useProtectedRoute() {
    const router = useRouter();
    const segments = useSegments();

    const [token, setToken] = useState(null);

    useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";

        SecureStore.getItemAsync(APP.ACCESS_TOKEN_KEY).then((token) => {
            setToken(token);
        });

        if (!token && !inAuthGroup) {
            return router.replace("/login");
        } else if (token && inAuthGroup) {
            return router.replace("/today");
        }
    }, [segments, token]);
}

export function Provider({ children }) {
    useProtectedRoute();

    return <>{children}</>;
}
