import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import APP from "../../../config/app";
import Spinner from "react-native-loading-spinner-overlay";
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
import { SIZES } from "../../../constants";
import { MobileCheckIcon } from "../../../components";

const RESERVATION_TABS = [
    "Checking Out",
    "Currently hosting",
    "Upcoming",
    "Pending Review",
];

export default function Today() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [activeReservationTab, setActiveReservationTab] = useState(
        RESERVATION_TABS[0]
    );

    const { isUserLoading, authenticatedUser } = useSelector(
        (state) => state.authentication
    );

    useEffect(() => {
        async function getAuthUser() {
            try {
                await dispatch(getAuthenticatedUser());
            } catch (error) {
                SecureStore.deleteItemAsync(APP.ACCESS_TOKEN_KEY).then(() => {
                    router.push("/login");
                });
            }
        }
        getAuthUser();
    }, []);

    const onPressReservationTab = (item) => {
        setActiveReservationTab(item);
    };

    const onPressAllReservations = () => {
        router.push("/all-reservations");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Spinner visible={isUserLoading} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewContainer}>
                    <View style={{ width: "100%" }}>
                        <Text style={styles.welcomeText}>
                            Welcome, {authenticatedUser.name}!
                        </Text>
                        <Text style={styles.yourReservationsText}>
                            Your reservations
                        </Text>
                        <View style={styles.tabsContainer}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={RESERVATION_TABS}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.tab(
                                            activeReservationTab,
                                            item
                                        )}
                                        onPress={() =>
                                            onPressReservationTab(item)
                                        }
                                    >
                                        <Text
                                            style={styles.tabText(
                                                activeReservationTab,
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
