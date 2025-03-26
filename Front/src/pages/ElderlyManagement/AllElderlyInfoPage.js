import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import styles from '../../styles/Monitoring/DashboardPage.styles';
import Card from "../../components/Card"; // 스타일 파일 import


const DashBoardPage = () => {
    return (
        <View style={styles.container}>
            {/* 왼쪽 Card 모음 */}
            <View style={styles.leftCards}>
                {/*Button Card*/}
                <Card
                    title="금일 방문 예정 가구"
                    onPress={() => alert('다음 페이지로 이동!')}
                >
                    <Text>김기민 (남성, 74세) - 애월읍 애월리</Text>
                    <Text>박신영 (여성, 92세) - 애월읍 고성리</Text>
                </Card>

                {/*No Button Card*/}
                <Card
                    title="금일 날씨"
                >
                    <Text>맑음</Text>
                </Card>

                <Card
                    title="공지 사항"
                    onPress={() => alert('다음 페이지로 이동!')}
                >
                    <Text>새해 복 많이 받아용!</Text>
                </Card>

            </View>

        </View>
    );
};

export default DashBoardPage;
