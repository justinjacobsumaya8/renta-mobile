import React from "react";
import { TouchableOpacity } from "react-native";

import { screenBtnStyle as styles } from "../../styles";

const ScreenHeaderBtn = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
