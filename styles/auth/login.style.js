import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    logo: {
        width: "50%",
        height: 100,
        resizeMode: "contain",
        margin: 40,
    },
    welcomeText: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.medium,
        padding: 5,
    },
    continueText: {
        fontSize: 13,
        color: COLORS.gray,
    },
    container: {
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: COLORS.primary,
        borderWidth: 0,
        color: COLORS.white,
        borderColor: "#7DE24E",
        height: 40,
        alignItems: "center",
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: COLORS.white,
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: FONT.medium,
    },
    inputContainer: {
        flexDirection: "row",
        height: 40,
        marginTop: 20,
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#dadae8",
    },
    forgotPasswordContainer: {
        alignItems: "flex-end",
        width: "100%",
        marginTop: 5,
    },
    forgotPasswordText: {
        fontFamily: FONT.medium,
        fontSize: 14,
        padding: 5,
    },
});

export default styles;
