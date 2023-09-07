import { View, ActivityIndicator, Dimensions } from "react-native";

import { blockLoaderStyle as styles } from "../../styles";

export default function BlockLoader({ children, loading }) {
    return (
        <View
            style={{ opacity: loading ? 0.5 : 1 }}
            pointerEvents={loading ? "none" : "auto"}
        >
            <View
                style={styles.loader(
                    Dimensions.get("window").height,
                    Dimensions.get("window").width
                )}
            >
                {loading && <ActivityIndicator />}
            </View>
            {children}
        </View>
    );
}
