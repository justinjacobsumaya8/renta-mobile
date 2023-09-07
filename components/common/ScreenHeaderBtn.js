import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { screenBtnStyle as styles } from "../../styles";

const ScreenHeaderBtn = ({ iconUrl, dimension, onPress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Image
                source={iconUrl}
                resizeMode="cover"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
