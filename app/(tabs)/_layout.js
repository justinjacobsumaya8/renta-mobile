import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { Platform, View, Text } from "react-native";

import {
    CalendarCheckIcon,
    ChatSquareIcon,
    CalendarIcon,
    BarChartIcon,
} from "../../components";

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="today"
            screenOptions={{
                tabBarStyle: Platform.OS === "ios" && {
                    backgroundColor: "transparent",
                },
                headerShown: false,
            }}
            tabBar={(props) => <BottomTabBar {...props} />}
        >
            <Tabs.Screen
                name="today"
                options={{
                    href: "/today",
                    title: "",
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: 9,
                                backgroundColor: "transparent",
                            }}
                        >
                            <CalendarCheckIcon
                                width={27}
                                height={27}
                                color={color}
                            />
                            <Text
                                style={{
                                    color,
                                    marginTop: 0.5,
                                    fontSize: 10,
                                }}
                            >
                                Today
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: "",
                    headerShown: true,
                    href: {
                        pathname: "/inbox",
                    },
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: 15,
                                backgroundColor: "transparent",
                            }}
                        >
                            <ChatSquareIcon
                                width={20}
                                height={20}
                                color={color}
                            />
                            <Text
                                style={{
                                    color,
                                    marginTop: 1.5,
                                    fontSize: 10,
                                }}
                            >
                                Inbox
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: "",
                    headerShown: true,
                    href: {
                        pathname: "/calendar",
                    },
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: 14,
                                backgroundColor: "transparent",
                            }}
                        >
                            <CalendarIcon
                                width={22}
                                height={22}
                                color={color}
                            />
                            <Text
                                style={{
                                    color,
                                    marginTop: 1,
                                    fontSize: 10,
                                }}
                            >
                                Calendar
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="insights"
                options={{
                    title: "",
                    headerShown: true,
                    href: {
                        pathname: "/insights",
                    },
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: 14,
                                backgroundColor: "transparent",
                            }}
                        >
                            <BarChartIcon
                                width={22}
                                height={22}
                                color={color}
                            />
                            <Text
                                style={{
                                    color,
                                    marginTop: 0,
                                    fontSize: 10,
                                }}
                            >
                                Insights
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
