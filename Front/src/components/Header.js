import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/Header.styles'

export default function Header({ name="김민기", location="애월읍 애월리", isManager=false }) {
    return (
        <View style={styles.header}>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userInfo}> {location} 지점 | {name}님</Text>
                <TouchableOpacity>
                    <Text style={styles.logout}>로그아웃</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}> 제주 애월읍 노인 안전 관리 시스템
                {isManager?
                    <Text> (총괄)</Text> :  <Text> (일반)</Text>
                }
            </Text>

        </View>
    );
}

