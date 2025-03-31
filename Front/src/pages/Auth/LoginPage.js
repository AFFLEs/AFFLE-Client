import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/Auth/LoginPage.styles'; // 스타일 파일 import
import { login } from '../../apis/auth'; // 👈 login 함수 임포트
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberId, setRememberId] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            // const data = await login(email, password);
            // await AsyncStorage.setItem('authToken', data.token); // 토큰 저장
            navigation.replace('Main');
        } catch (error) {
            console.error('로그인 오류:', error);
            Alert.alert('로그인 실패', error.response?.data?.message || '다시 시도해주세요.');
        }
    };

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
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Login Button */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginPage;
