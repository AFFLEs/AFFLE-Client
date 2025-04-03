import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from "react-native";
import styles from '../../styles/SystemManage/ListPage.styles';
import Card from "../../components/Card";
import RegisterForm from "../../components/RegisterForm";
import ElderlyInfoCard from "../../components/ElderlyInfoCard";
import ElderlyListCard from "../../components/ElderlyListCard";


const ElderlyListPage = () => {
    const DUMMY_ELDERLY_INFO_LIST = [
        {
            elderly_id: 0,
            name: "김기민",
            gender: "남성",
            age: 74,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김민기",
                gender: "남성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 1,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 2,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 3,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 4,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 5,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 6,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 7,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 8,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 9,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 10,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 11,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 12,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
        {
            elderly_id: 13,
            name: "김민지",
            gender: "여성",
            age: 87,
            recent_visit_date: "24.10.24",
            next_visit_date: "24.12.02",
            contact: "010-1234-1234",
            category: "독거 노인",
            region: "애월읍 애월리",
            address: "제주특별자치도 제주시 애월읍 곽지11길 27",
            manager: {
                name: "김지민",
                gender: "여성",
                age: 74,
                work_region: "애월읍 애월리",
                contact: "010-1234-1234",
            },
        },
    ];
    const DUMMY_ELDERLY_STATUS_LIST = [
        {
            elderly_id: 0,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 1,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 2,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 3,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 4,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 5,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 6,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 7,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 8,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 9,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 10,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 11,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 12,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
        {
            elderly_id: 13,
            status: [
                { type: "체온", status: "정상", color: "green" },
                { type: "심박수", status: "경고", color: "yellow" },
                { type: "위치 착용", status: "완료", color: "green" },
            ],
        },
    ];

    const [selectedId, setSelectedId] = useState(0);
    const [isRegistering, setIsRegistering] = useState(false);
    const [elderlyInfoList, setElderlyInfoList] = useState(DUMMY_ELDERLY_INFO_LIST);
    const [elderlyStatusList, setElderlyStatusList] = useState(DUMMY_ELDERLY_STATUS_LIST);

    useEffect(() => {
        fetchElderlyList();
    }, []);

    const fetchElderlyList = async () => {
        try {
            // API 요청 GET
            // setElderlyInfoList, setElderlyStatusList

        } catch (error) {
            console.error(error);
            Alert.alert('오류', '노인 목록을 가져오는데 실패했습니다.');
        }
    };

    const handlePress = (id) => {
        setSelectedId(id);
        setIsRegistering(false);
    };
    const handleRegister = () => {
        setIsRegistering(true);
        setSelectedId(null);
    };
    const handleSave = async (newSubject) => {
        try {
            // API 요청 POST
            console.log(newSubject);
            Alert.alert('등록 완료', '노인이 성공적으로 등록되었습니다.');
            setIsRegistering(false);
            fetchElderlyList();  // 새로고침
        } catch (error) {
            console.error(error);
            Alert.alert('등록 실패', '노인 등록 중 문제가 발생했습니다.');
        }
    };

    const handleDelete = (id) => {
        const subject = DUMMY_ELDERLY_INFO_LIST.find(item => item.elderly_id === id);
        if (subject) {
            Alert.alert(
                "삭제 확인",
                `정말로 ${subject.name}님을 삭제하시겠습니까?`,
                [
                    { text: "취소", style: "cancel" },
                    { text: "삭제", onPress: () => deleteElderly(id) }
                ]
            );
        }
    };
    const deleteElderly = (id) => {
        setElderlyInfoList(prevList => {
            const updatedList = prevList.filter(item => item.elderly_id !== id);

            if (selectedId === id) {
                setSelectedId(updatedList.length > 0 ? updatedList[0].elderly_id : null);
            }

            return updatedList;
        });

        setElderlyStatusList(prevList => prevList.filter(item => item.elderly_id !== id));
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {/* 노인 목록 */}
            <View style={styles.leftCards}>
                <Card
                    title="🏠 노인 목록"
                >
                    <ScrollView style={{ maxHeight: 500 }} contentContainerStyle={styles.list}>
                        {elderlyInfoList.map((elderly, index) => (
                            <ElderlyListCard
                                key={elderly.elderly_id}
                                elderly = {elderly}
                                selected={selectedId === elderly.elderly_id}
                                onPress={() => handlePress(elderly.elderly_id)}
                            />
                        ))}
                    </ScrollView>

                    <TouchableOpacity style={styles.Button} onPress={handleRegister}>
                        <Text style={styles.ButtonText}>등록하기</Text>
                    </TouchableOpacity>
                </Card>

            </View>

            {/* 노인 정보 상세 조회 */}
            <View style={styles.rightCards}>
                <Card
                    title={isRegistering ? "📝 노인 등록" : "👵🏻 노인 정보 상세 조회"}
                >
                    {
                        isRegistering ? (
                            <RegisterForm onSave={handleSave} type={"elderly"} />
                        ) : (
                            <View>
                                <ElderlyInfoCard
                                    elderly={elderlyInfoList.find(e => e.elderly_id === selectedId) || DUMMY_ELDERLY_INFO_LIST[0]}
                                    status={elderlyStatusList.find(s => s.elderly_id === selectedId) || DUMMY_ELDERLY_STATUS_LIST[0]}
                                />

                                <TouchableOpacity style={styles.Button}>
                                    <Text style={styles.ButtonText} onPress={() => handleDelete(selectedId)}>삭제하기</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </Card>
            </View>

        </ScrollView>
    );
};

export default ElderlyListPage;
