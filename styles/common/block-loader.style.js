import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loader: (height, width) => ({
        backgroundColor: "transparent",
        position: "absolute",
        height: height,
        width: width,
        // justifyContent: "center",
        // alignItems: "center",
    }),
});

export default styles;
