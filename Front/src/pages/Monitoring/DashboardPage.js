import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from "../../components/Card";
import MeterReaderListCard from '../../components/MeterReaderListCard';
import DashBoardModal from '../../components/DashBoardModal';
import styles from '../../styles/Monitoring/DashboardPage.styles';
import HeatIllnessDetailModal from './HeatIllnessDetailModal';


const DashBoardPage = () => {
    const DUMMY_MANAGER_DATA = [
        { manager_id: 0, name: '김민기', status: 0, work_region: '애월읍 애월리', contact: '010-1234-1234' },
        { manager_id: 1, name: '김지민', status: 0, work_region: '애월읍 장전리', contact: '010-5678-5678' },
        { manager_id: 2, name: '박영신', status: 1, work_region: '애월읍 봉성리', contact: '010-1111-2222' },
        { manager_id: 3, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 4, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 5, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
    ];

    const [selectedId, setSelectedId] = useState(0);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handlePress = (id) => {
        setSelectedId(id);
    };
    //어떤 타입의 모달 열지
    const toggleOverlay = () => {
      setIsOverlayVisible(!isOverlayVisible);
    };
    return (
        <>
        <ScrollView style={styles.container}>
            <View style={styles.mainWrapper}>
                {/* 왼쪽 카드 */}
                <View style={styles.leftCards}>
                    <Card title="검침원 목록">
                        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                            <View style={styles.list}>
                                {DUMMY_MANAGER_DATA.map((manager) => (
                                    <View style={styles.listItem} key={manager.manager_id}>
                                        <MeterReaderListCard
                                            manager={manager}
                                            selected={selectedId === manager.manager_id}
                                            onPress={() => handlePress(manager.manager_id)}
                                        />
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </Card>

                    <Card title="온열질환 경고 알림 현황">
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' , paddingVertical: 10}}>
                            {/* 주의 카드 */}
                            <View style={{ backgroundColor: '#FF9C00', flex: 1, padding: 10, marginRight: 5, borderRadius: 8 }}>
                                <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18 }}>주의</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18}}>4</Text>
                                </View>
                            </View>

                            {/* 경고 카드 */}
                            <View style={{ backgroundColor: '#FF5F00', flex: 1, padding: 10, marginRight: 5, borderRadius: 8 }}>
                                <Text style={{ color: '#000', fontWeight: 'bold' ,fontSize: 18}}>경고</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18 }}>4</Text>
                                </View>
                            </View>

                            {/* 위험 카드 */}
                            <View style={{ backgroundColor: '#FF0716', flex: 1, padding: 10, borderRadius: 8 }}>
                                <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18 }}>위험</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18 }}>4</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={toggleOverlay} style={styles.arrowButton}>
                            <Text style={styles.arrowText}>{'>'}</Text>
                        </TouchableOpacity>
                    </Card>


                    <Card title="스마트워치 착용 현황">
                        <Text>위치 착용: 10 / 13명</Text>
                        <Text>착용률: 76.9%</Text>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>미착용자:</Text>
                        <Text>박신영 - 애월읍 고내리</Text>
                    </Card>
                </View>

                {/* 오른쪽 카드 */}
                <View style={styles.rightCards}>
                    <Card title="현장조치 발생 현황">
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' , paddingVertical: 10, paddingHorizontal:5}}>
                            {/* 조치중 */}
                            <View style={{ backgroundColor: '#FF0716', flex: 1, padding: 10, marginRight: 15, borderRadius: 8 }}>
                                <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18 }}>조치중</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18, marginRight:5}}>4</Text>
                                </View>
                            </View>

                            {/* 조치완료 */}
                            <View style={{ backgroundColor: '#E8EDE8', flex: 1, padding: 10, borderRadius: 8 }}>
                                <Text style={{ color: '#000', fontWeight: 'bold' ,fontSize: 18}}>조치완료</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold',fontSize: 18, marginRight:5}}>4</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={toggleOverlay} style={styles.arrowButton}>
                            <Text style={styles.arrowText}>{'>'}</Text>
                        </TouchableOpacity>
                    </Card>
                    <Card title="지도">
                    </Card>
                </View>
            </View>
        </ScrollView>
        {/* 오버레이 */}
        {isOverlayVisible && (
            <DashBoardModal onClose={toggleOverlay} visible={isOverlayVisible}>
                <HeatIllnessDetailModal />
            </DashBoardModal>
        )}

        </>
    );
};

export default DashBoardPage;

// 오버레이 스타일
const overlayStyles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: Dimensions.get('window').width * 0.8,
        height: '100%',
        backgroundColor: 'white',
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
        elevation: 5,
        zIndex: 999,
    },
});
