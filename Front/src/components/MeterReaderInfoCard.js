import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/SystemManage/MeterReaderInfoCard.styles';
import WorkStatusLabel from "./StatusLabel";

const MeterReaderInfoCard = ({ manager, elderlyList }) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />

            {/* 담당자 정보 */}
            <View style={styles.nameRow}>
                <Text style={styles.name}>{manager.name}</Text>
                <Text style={styles.age}> {manager.gender} | {manager.age}세</Text>
                <WorkStatusLabel status={manager.status} />
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.info}>근무 지역 : {manager.work_region}</Text>
                    <Text style={styles.info}>연락처 : {manager.contact}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.info}>근무 시간 :{manager.work_time}</Text>
                    <Text style={styles.info}>기기 일련 번호 : {manager.device}</Text>
                </View>
            </View>

            <Text style={styles.info}>주소 : {manager.address}</Text>

            <View style={styles.divider} />

            {/* 담당 노인 목록 */}
            <View style={styles.rowBetween}>
                <Text style={styles.sectionTitle}>담당 노인 목록</Text>
                <Text style={styles.sectionTitle}>{elderlyList.length}명</Text>
            </View>

            <View style={styles.elderlyList}>
                {elderlyList.map((elderly, index) => (
                    <View key={elderly.elderly_id} style={styles.elderlyCard}>
                        <Text style={styles.elderlyName}>{elderly.name} <Text style={styles.elderlyAge}>{elderly.gender} | {elderly.age}세</Text></Text>
                        <Text style={styles.elderlyInfo}>{elderly.region}</Text>
                        <Text style={styles.elderlyInfo}>최근 방문 일자: {elderly.recent_visit_date}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.divider} />

        </View>
    );
};

export default MeterReaderInfoCard;
