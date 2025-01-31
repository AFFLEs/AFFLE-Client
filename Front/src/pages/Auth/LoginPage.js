import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/Auth/LoginPage.styles'; // 스타일 파일 import

const LoginPage = ({ navigation }) => {
    const [rememberId, setRememberId] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            {/* Background container */}
            <View style={styles.innerContainer}>
                {/* Title */}
                <Text style={styles.title}>AFFLE Safe</Text>

                {/* Input Fields */}
                <TextInput
                    style={styles.input}
                    placeholder="User ID"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry={!showPassword}
                />

                {/* Login Button */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.replace('Main')}
                >
                    <Text style={styles.loginButtonText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginPage;
