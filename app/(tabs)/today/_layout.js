import { Stack } from "expo-router";

import { COLORS, icons, images } from "../../../constants";
import { ScreenHeaderBtn } from "../../../components";

export default function TodayLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: "",
                }}
            />
        </Stack>
    );
}
