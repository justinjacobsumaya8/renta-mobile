import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.medium,
    },
    welcomeText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.xxLarge,
    },
    yourReservationsText: {
        marginTop: 20,
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabResultContainer: {
        textAlign: "center",
        alignItems: "center",
        marginTop: SIZES.xLarge,
        padding: 50,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.medium,
    },
    tabResultText: {
        opacity: 0.8,
        marginTop: 12,
        fontSize: SIZES.small,
        textAlign: "center",
    },
    allReservationsContainer: {
        marginTop: 25,
        width: "40%",
    },
    allReservationsText: {
        textDecorationLine: "underline",
        fontFamily: FONT.medium,
    },
});

export default styles;
