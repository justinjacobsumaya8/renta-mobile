import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerBtnRightContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
    viewContainer: {
        paddingTop: SIZES.small,
        paddingLeft: SIZES.medium,
        paddingRight: SIZES.medium,
        paddingBottom: SIZES.small,
    },
    reservationsText: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.gray,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.xSmall,
        paddingHorizontal: SIZES.small,
        borderBottomWidth: activeJobType === item ? 2 : 0,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        fontSize: 12,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray,
    }),
    tabResultContainer: {
        textAlign: "center",
        alignItems: "center",
        marginTop: SIZES.xLarge,
        padding: 50,
        borderRadius: SIZES.medium,
    },
    tabResultText: {
        opacity: 0.8,
        marginTop: 12,
        fontSize: SIZES.small,
        textAlign: "center",
    },
});

export default styles;
