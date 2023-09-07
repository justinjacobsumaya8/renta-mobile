import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { getAuthenticatedUser } from "../../../redux/actions/authentication.action";

import { todayTabStyle as styles } from "../../../styles";
import { COLORS, SIZES } from "../../../constants";
import { BlockLoader, MobileCheckIcon } from "../../../components";

const RESERVATION_STATUSES = [
    "Checking Out",
    "Currently hosting",
    "Upcoming",
    "Pending Review",
];

export default function Today() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [activeReservationStatus, setActiveReservationStatus] = useState(
        RESERVATION_STATUSES[0]
    );

    const { isUserLoading, authenticatedUser } = useSelector(
        (state) => state.authentication
    );

    useEffect(() => {
        dispatch(getAuthenticatedUser());
    }, []);

    const onPressReservationStatus = (item) => {
        setActiveReservationStatus(item);
    };

    const onPressAllReservations = () => {
        router.push("/all-reservations");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{ width: "100%" }}>
                        <BlockLoader loading={isUserLoading}>
                            <Text style={styles.welcomeText}>
                                Welcome, {authenticatedUser.name}!
                            </Text>
                        </BlockLoader>
                        <Text style={styles.yourReservationsText}>
                            Your reservations
                        </Text>
                        <View style={styles.tabsContainer}>
                            <FlatList
                                data={RESERVATION_STATUSES}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.tab(
                                            activeReservationStatus,
                                            item
                                        )}
                                        onPress={() =>
                                            onPressReservationStatus(item)
                                        }
                                    >
                                        <Text
                                            style={styles.tabText(
                                                activeReservationStatus,
                                                item
                                            )}
                                        >
                                            {item} (0)
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item}
                                contentContainerStyle={{
                                    columnGap: SIZES.small,
                                }}
                                horizontal
                            />
                        </View>
                        <View style={styles.tabResultContainer}>
                            <MobileCheckIcon width={35} height={35} />
                            <Text style={styles.tabResultText}>
                                You don't have any guests checking out today or
                                tomorrow.
                            </Text>
                        </View>
                        <View style={styles.allReservationsContainer}>
                            <TouchableOpacity onPress={onPressAllReservations}>
                                <Text style={styles.allReservationsText}>
                                    All reservations (0)
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
