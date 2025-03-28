import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from '../../styles/SystemManage/ListPage.styles';
import Card from '../../components/Card';
import MeterReaderInfoCard from '../../components/MeterReaderInfoCard';
import MeterReaderListCard from '../../components/MeterReaderListCard';

const MeterReaderListPage = () => {

    const DUMMY_MANAGER_DATA = [
        {
            manager_id: 0,
            name: '김민기',
            gender: '남성',
            age: 74,
            work_status: 0,
            work_region: '애월읍 애월리',
            work_time: '평일 10:00 ~ 17:00',
            contact: '010-1234-1234',
            device: '0123444',
            address: '제주특별자치도 제주시 애월읍 곽지11길 27',
            subject: [
                {
                    elderly_id: 0,
                    name: '김기민',
                    gender: '남성',
                    age: 74,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
                {
                    elderly_id: 1,
                    name: '김민지',
                    gender: '여성',
                    age: 87,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
                {
                    elderly_id: 2,
                    name: '박신영',
                    gender: '여성',
                    age: 68,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
                {
                    elderly_id: 3,
                    name: '한원예',
                    gender: '여성',
                    age: 81,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
            ],
        },
        {
            manager_id: 1,
            name: '김민기',
            gender: '남성',
            age: 74,
            work_status: 0,
            work_region: '애월읍 애월리',
            work_time: '평일 10:00 ~ 17:00',
            contact: '010-1234-1234',
            device: '0123444',
            address: '제주특별자치도 제주시 애월읍 곽지11길 27',
            subject: [
                {
                    elderly_id: 0,
                    name: '김기민',
                    gender: '남성',
                    age: 74,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
            ],
        },
        {
            manager_id: 2,
            name: '김민기',
            gender: '남성',
            age: 74,
            work_status: 0,
            work_region: '애월읍 애월리',
            work_time: '평일 10:00 ~ 17:00',
            contact: '010-1234-1234',
            device: '0123444',
            address: '제주특별자치도 제주시 애월읍 곽지11길 27',
            subject: [
                {
                    elderly_id: 0,
                    name: '김기민',
                    gender: '남성',
                    age: 74,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
                {
                    elderly_id: 1,
                    name: '김민지',
                    gender: '여성',
                    age: 87,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
            ],
        },
        {
            manager_id: 3,
            name: '김민기',
            gender: '남성',
            age: 74,
            work_status: 0,
            work_region: '애월읍 애월리',
            work_time: '평일 10:00 ~ 17:00',
            contact: '010-1234-1234',
            device: '0123444',
            address: '제주특별자치도 제주시 애월읍 곽지11길 27',
            subject: [
                {
                    elderly_id: 0,
                    name: '김기민',
                    gender: '남성',
                    age: 74,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
                {
                    elderly_id: 1,
                    name: '김민지',
                    gender: '여성',
                    age: 87,
                    recent_visit_date: '24.10.24',
                    region: '애월읍 애월리',
                },
            ],
        },
    ];
    const [selectedId, setSelectedId] = useState(0);
    const [managerInfoList, setManagerInfoList] = useState(DUMMY_MANAGER_DATA);
    const handlePress = (id) => {
        setSelectedId(id);
    };

    const handleDelete = (id) => {
        const subject = managerInfoList.find(item => item.manager_id === id);

        if (subject) {
            Alert.alert(
                '삭제 확인',
                `정말로 ${subject.name}님을 삭제하시겠습니까?`,
                [
                    { text: '취소', style: 'cancel' },
                    { text: '삭제', onPress: () => deleteManager(id) }
                ]
            );
        }
    };

    const deleteManager = (id) => {
        setManagerInfoList(prevList => {
            const updatedList = prevList.filter(item => item.manager_id !== id);

            if (selectedId === id) {
                setSelectedId(updatedList.length > 0 ? updatedList[0].manager_id : null);
            }

            return updatedList;
        });
    };

    return (
        <View style={styles.container}>
            {/* 검침원 목록 */}
            <View style={styles.leftCards}>
                <Card
                    title="💼 검침원 목록"
                >
                    <ScrollView>
                        <View style={styles.list}>
                            {managerInfoList.map((manager, index) => (
                                <MeterReaderListCard
                                    key={manager.manager_id}
                                    manager = {manager}
                                    selected={selectedId === manager.manager_id}
                                    onPress={() => handlePress(manager.manager_id)}
                                />
                            ))}
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>등록하기</Text>
                    </TouchableOpacity>
                </Card>

            </View>

            {/* 검침원 상세 조회 */}
            <View style={styles.rightCards}>
                <Card
                    title="🧑🏻‍💼 검침원 정보 상세 조회"
                >
                    <MeterReaderInfoCard
                        manager={managerInfoList.find(e => e.manager_id === selectedId) || managerInfoList[0]}
                        elderlyList={managerInfoList.find(s => s.manager_id === selectedId).subject || managerInfoList[0].subject}
                    />

                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText} onPress={() => handleDelete(selectedId)}>삭제하기</Text>
                    </TouchableOpacity>
                </Card>
            </View>

        </View>
    );
};

export default MeterReaderListPage;
