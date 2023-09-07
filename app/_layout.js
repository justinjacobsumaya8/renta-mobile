import { useCallback } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider as ReduxProvider } from "react-redux";
import FlashMessage from "react-native-flash-message";

import store from "../redux/store";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        "Circular-Medium": require("../assets/fonts/circular-medium.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ReduxProvider store={store}>
            <Stack onLayout={onLayoutRootView}>
                <Stack.Screen
                    name="(auth)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="loading"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <FlashMessage position="top" />
        </ReduxProvider>
    );
};

export default RootLayout;
