import React from 'react';
import { View, Text } from 'react-native';
import HealthStatusCard from './HealthStatusCard';
import styles from '../styles/SystemManage/ElderlyInfoCard.styles';

const ElderlyInfoCard = ({ elderly, status }) => {
    const health_status = status.status;

    return (
        <View style={styles.container}>
            <View style={styles.divider} />

            {/* 노인 기본 정보 */}
            <Text style={styles.name}>{elderly.name}<Text style={styles.age}> {elderly.gender} | {elderly.age}세</Text></Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.info}>최근 방문 일자 : {elderly.recent_visit_date}</Text>
                    <Text style={styles.info}>연락처 : {elderly.contact}</Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.info}>다음 방문 일자 : {elderly.next_visit_date}</Text>
                    <Text style={styles.info}>구분 : {elderly.category}</Text>
                </View>
            </View>
            <Text style={styles.info}>주소 : {elderly.address}</Text>

            {/* 건강 상태 */}
            <View style={styles.statusContainer}>
                {health_status.map((item, index) => (
                    <HealthStatusCard
                        key={index}
                        color = {item.color}
                        topText = {item.type}
                        bottomText = {item.status}
                    />
                ))}
            </View>

            <View style={styles.divider} />
            {/* 담당 검침원 */}
            <Text style={styles.sectionTitle}>담당 검침원</Text>
            <View style={styles.managerCard}>
                <Text style={styles.managerName}>{elderly.manager.name} <Text style={styles.age}> {elderly.manager.gender} | {elderly.manager.age}세</Text></Text>
                <Text style={styles.info}>근무 지역 : {elderly.manager.work_region}</Text>
                <Text style={styles.info}>연락처 : {elderly.manager.contact}</Text>
            </View>
            <View style={styles.divider} />
        </View>
    );
};

export default ElderlyInfoCard;
