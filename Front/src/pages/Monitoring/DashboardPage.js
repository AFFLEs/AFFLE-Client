import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from "../../components/Card";
import MeterReaderListCard from '../../components/MeterReaderListCard';
import DashBoardModal from '../../components/DashBoardModal';
import styles from '../../styles/Monitoring/DashboardPage.styles';
import HeatIllnessDetailModal from './HeatIllnessDetailModal';
import OnSiteActionDetailModal from './OnSiteActionDetailModal';

const DashBoardPage = () => {
    const DUMMY_MANAGER_DATA = [
        { manager_id: 0, name: '김민기', status: 0, work_region: '애월읍 애월리', contact: '010-1234-1234' },
        { manager_id: 1, name: '김지민', status: 0, work_region: '애월읍 장전리', contact: '010-5678-5678' },
        { manager_id: 2, name: '박영신', status: 1, work_region: '애월읍 봉성리', contact: '010-1111-2222' },
        { manager_id: 3, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 4, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 5, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
    ];
    const DUMMY_WATCH_DATA = [
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-26' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-20' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-18' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-15' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-10' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-07' },
        { name: '박신영', location: '애월읍 고내리', lastDate: '2025-03-01' },
        ];

    const totalUsers = 100; {/*전체 노인 수 가정 */}
    const notWearingCount = 10; {/*미착용자 노인 수 가정*/}
    const wearingCount = totalUsers - notWearingCount;
    const wearingRate = ((wearingCount / totalUsers) * 100).toFixed(1);

    const [selectedId, setSelectedId] = useState(0);
    const [isHeatIllnessOverlayVisible, setIsHeatIllnessOverlayVisible] = useState(false);
    const [isFieldActionOverlayVisible, setIsFieldActionOverlayVisible] = useState(false);

    const handlePress = (id) => {
        setSelectedId(id);
    };
    //어떤 타입의 모달 열지
    const toggleHeatIllnessOverlay = () => {
        setIsHeatIllnessOverlayVisible(!isHeatIllnessOverlayVisible);
    };
    const toggleOnSiteActionOverlay = () => {
        setIsFieldActionOverlayVisible(!isFieldActionOverlayVisible);
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
                        <TouchableOpacity onPress={toggleHeatIllnessOverlay} style={styles.arrowButton}>
                            <Text style={styles.arrowText}>{'>'}</Text>
                        </TouchableOpacity>
                    </Card>
                    <Card title="스마트워치 착용 현황" style={{maxHeight:150}}>
                      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                        <Text style={{ flex: 1, fontWeight: 'bold' ,fontSize:15}}>위치 착용</Text>
                        <Text style={{ flex: 1, fontWeight: 'bold' , fontSize:15, textAlign:'right'}}>{`${wearingCount} / ${totalUsers}명`}</Text>
                        <View style={{paddingHorizontal:10}}></View>
                        <Text style={{ flex: 1, fontWeight: 'bold', fontSize:15 }}>착용률</Text>
                        <Text style={{ flex: 1, fontWeight: 'bold' , fontSize:15, textAlign:'right'}}>{`${wearingRate}%`}</Text>
                      </View>
                      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>워치 미착용자 목록</Text>
                      {/* ScrollView로 세로 스크롤 가능하게 만들기 */}
                      <View style={{height:150 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 , borderBottomWidth: 1}}>
                            <Text style={{ flex: 1, fontWeight: 'bold' }}>성명</Text>
                            <Text style={{ flex: 1, fontWeight: 'bold' }}>위치</Text>
                            <Text style={{ flex: 1, fontWeight: 'bold' }}>마지막 착용 날짜</Text>
                        </View>
                        <ScrollView style={styles.watchScrollContainer} contentContainerStyle={styles.watchScrollContent} showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
                            {DUMMY_WATCH_DATA.map((person, index) => (
                                <View key={index} style={{ flexDirection: 'row', paddingVertical: 5 }}>
                                  <Text style={{ flex: 1 }}>{person.name}</Text>
                                  <Text style={{ flex: 1 }}>{person.location}</Text>
                                  <Text style={{ flex: 1 }}>{person.lastDate}</Text>
                                </View>
                            ))}
                        </ScrollView>
                      </View>
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
                        <TouchableOpacity onPress={toggleOnSiteActionOverlay} style={styles.arrowButton}>
                            <Text style={styles.arrowText}>{'>'}</Text>
                        </TouchableOpacity>
                    </Card>
                    <Card title="지도">
                    </Card>
                </View>
            </View>
        </ScrollView>
        {/* 오버레이 */}
        {isHeatIllnessOverlayVisible && (
            <DashBoardModal onClose={toggleHeatIllnessOverlay} visible={isHeatIllnessOverlayVisible}>
                <HeatIllnessDetailModal />
            </DashBoardModal>
        )}
        {isFieldActionOverlayVisible && (
            <DashBoardModal onClose={toggleOnSiteActionOverlay} visible={isFieldActionOverlayVisible}>
                <OnSiteActionDetailModal />
            </DashBoardModal>
        )}

        </>
    );
};

export default DashBoardPage;
