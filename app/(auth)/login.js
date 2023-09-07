import { createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { login } from "../../redux/actions/authentication.action";
import { showMessage } from "react-native-flash-message";
import { Link, useRouter } from "expo-router";

import { loginStyle as styles } from "../../styles";
import { images } from "../../constants";
import { BlockLoader } from "../../components";

export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const passwordInputRef = createRef();

    const { isLoggingIn } = useSelector((state) => state.authentication);

    const onPressSubmit = async () => {
        if (!email) {
            showMessage({
                message: "Email is required",
                type: "danger",
            });
            return;
        }
        if (!password) {
            showMessage({
                message: "Password is required",
                type: "danger",
            });
            return;
        }

        try {
            await dispatch(login(email, password));
            setEmail("");
            setPassword("");
            router.push("/today");
        } catch (error) {
            showMessage({
                message: error.message,
                type: "danger",
            });
        }
    };

    const onChangeTextEmail = (value) => {
        setEmail(value);
    };

    const onChangeTextPassword = (value) => {
        setPassword(value);
    };

    return (
        <View style={styles.mainBody}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                // contentContainerStyle={{
                //     flex: 1,
                //     justifyContent: "center",
                //     alignContent: "center",
                // }}
            >
                <BlockLoader loading={isLoggingIn}>
                    <View style={{ marginTop: 30, marginBottom: 30 }}>
                        <KeyboardAvoidingView enabled>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={images.logo}
                                    style={styles.logo}
                                />
                                <Text style={styles.welcomeText}>Welcome</Text>
                                <Text style={styles.continueText}>
                                    Login to continue
                                </Text>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={onChangeTextEmail}
                                        placeholder="Enter Email"
                                        placeholderTextColor="#8b9cb5"
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        onSubmitEditing={() =>
                                            passwordInputRef.current &&
                                            passwordInputRef.current.focus()
                                        }
                                        underlineColorAndroid="#f000"
                                        blurOnSubmit={false}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={onChangeTextPassword}
                                        placeholder="Enter Password"
                                        placeholderTextColor="#8b9cb5"
                                        keyboardType="default"
                                        ref={passwordInputRef}
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        secureTextEntry={true}
                                        underlineColorAndroid="#f000"
                                        returnKeyType="next"
                                    />
                                </View>
                                <View style={styles.forgotPasswordContainer}>
                                    <Link href="/forgot-password">
                                        <Text style={styles.forgotPasswordText}>
                                            Forgot Password?
                                        </Text>
                                    </Link>
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    activeOpacity={0.5}
                                    onPress={onPressSubmit}
                                >
                                    <Text style={styles.buttonTextStyle}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </BlockLoader>
            </ScrollView>
        </View>
    );
}
