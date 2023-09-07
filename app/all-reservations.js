import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import {
    ArrowLeftIcon,
    FilterIcon,
    MobileCheckIcon,
    ScreenHeaderBtn,
    SortIcon,
} from "../components";
import { allReservationsStyle as styles } from "../styles";

const RESERVATION_TABS = [
    "All",
    "Pending",
    "Upcoming",
    "Ongoing",
    "Pending Review",
];

export default function AllReservations() {
    const router = useRouter();

    const [activeReservationTab, setActiveReservationTab] = useState(
        RESERVATION_TABS[0]
    );

    const onPressBack = () => {
        router.push("/today");
    };

    const onPressReservationTab = (item) => {
        setActiveReservationTab(item);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View>
                            <ScreenHeaderBtn onPress={onPressBack}>
                                <ArrowLeftIcon width="18px" height="18px" />
                            </ScreenHeaderBtn>
                        </View>
                    ),
                    headerRight: () => (
                        <View>
                            <View style={styles.headerBtnRightContainer}>
                                <ScreenHeaderBtn>
                                    <FilterIcon width="15px" height="15px" />
                                </ScreenHeaderBtn>
                                <ScreenHeaderBtn>
                                    <SortIcon width="15px" height="15px" />
                                </ScreenHeaderBtn>
                            </View>
                        </View>
                    ),
                    headerTitle: "",
                }}
            />
            <View style={styles.viewContainer}>
                <Text style={styles.reservationsText}>Reservations</Text>
                <View style={styles.tabsContainer}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={RESERVATION_TABS}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeReservationTab, item)}
                                onPress={() => onPressReservationTab(item)}
                            >
                                <Text
                                    style={styles.tabText(
                                        activeReservationTab,
                                        item
                                    )}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        horizontal
                    />
                </View>
                <View style={styles.tabResultContainer}>
                    <MobileCheckIcon width={35} height={35} />
                    <Text style={styles.tabResultText}>
                        You don't currently have reservations
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
