import React from 'react';
import {View, Text} from "react-native";
import styles from '../../styles/Monitoring/DashboardPage.styles'; // 스타일 파일 import


const SOSCallPage = () => {
    return (
        <View style={styles.container}>
            {/* SOS 호출 페이지 */}
            <View style={styles.dashboard}>
                <Text style={styles.dashboardText}>SOS 호출 창입니다.</Text>
            </View>
        </View>
    );
};

export default SOSCallPage;
