import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Alert,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/SystemManage/ManageAssignmentPage.styles';
import Card from '../../components/Card';
import StatusLabel from '../../components/StatusLabel';

const ManageAssignmentPage = () => {
    const DUMMY_METER_READERS = ['김민지', '김기민', '박신영', '한예원', '이수정'];
    const DUMMY_ELDERLY = ['김지민', '김민기', '한예원', '홍길동', '이지은'];
    const DUMMY_ASSIGN_LIST = [
        {
            id: '1',
            meter_reader: '김민지',
            elderly: '김지민',
            health_status: 0,
            region: '애월읍 애월리',
            assign_status: 0,
        },
        {
            id: '2',
            meter_reader: '김기민',
            elderly: '김민기',
            health_status: 1,
            region: '애월읍 애월리',
            assign_status: 0,
        },
        {
            id: '3',
            meter_reader: '박신영',
            elderly: '-',
            health_status: 3,
            region: '애월읍 애월리',
            assign_status: 1,
        },
        {
            id: '4',
            meter_reader: '-',
            elderly: '한예원',
            health_status: 0,
            region: '애월읍 애월리',
            assign_status: 2,
        },
    ];

    const [assignList, setAssignList] = useState([]);
    const [searchType, setSearchType] = useState('meter_reader');
    const [searchKeyword, setSearchKeyword] = useState('');

    // 모달창 상태
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedMeterReader, setSelectedMeterReader] = useState('');
    const [selectedElderly, setSelectedElderly] = useState('');

    // API 요청
    const fetchAssignList = async () => {
        try {
            setAssignList(DUMMY_ASSIGN_LIST);
        } catch (error) {
            console.error(error);
            Alert.alert('오류', '매칭 목록을 불러오는데 실패했습니다.');
        }
    };

    useEffect(() => {
        fetchAssignList();
    }, []);

    // 수정하기 버튼
    const openModal = (item) => {
        setSelectedItem(item);
        setSelectedMeterReader(item.meter_reader === '-' ? '' : item.meter_reader);
        setSelectedElderly(item.elderly === '-' ? '' : item.elderly);
        setModalVisible(true);
    };

    // 수정 완료 버튼
    const handleConfirm = async () => {
        if (!selectedItem) return;

        try {
            // API 요청
            setModalVisible(false);
        } catch (error) {
            console.error(error);
            Alert.alert('오류', '배정 수정 중 오류가 발생했습니다.');
        }
    };

    // 배정 현황 표시 텍스트
    const getAssignStatusText = (code) => {
        switch (code) {
            case 0:
                return '배정 완료';
            case 1:
                return '미배정 검침원';
            case 2:
                return '미배정 노인';
            default:
                return '-';
        }
    };

    // 검색 필터링
    const filteredList = assignList.filter((item) => {
        const target = item[searchType] || '';
        return target.includes(searchKeyword);
    });

    // 상단 통계(배정/미배정 노인/미배정 검침원)
    const assigned = assignList.filter((a) => a.assign_status === 0).length;
    const unassignedElderly = assignList.filter((a) => a.assign_status === 2).length;
    const unassignedReader = assignList.filter((a) => a.assign_status === 1).length;

    return (
        <View style={styles.container}>
            <Card title="🚩담당 배정 관리">
                {/* 상단 통계 */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text>배정 완료</Text>
                        <Text style={styles.statValue}>{assigned}쌍</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text>미배정 노인</Text>
                        <Text style={styles.statValue}>{unassignedElderly}명</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text>미배정 검침원</Text>
                        <Text style={styles.statValue}>{unassignedReader}명</Text>
                    </View>
                </View>

                {/* 검색창 */}
                <View style={styles.searchRow}>
                    <Picker
                        selectedValue={searchType}
                        onValueChange={(itemValue) => setSearchType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="검침원" value="meter_reader" />
                        <Picker.Item label="노인" value="elderly" />
                    </Picker>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="이름을 입력하세요"
                        value={searchKeyword}
                        onChangeText={setSearchKeyword}
                    />
                </View>

                {/* 테이블 헤더 */}
                <View style={styles.tableHeader}>
                    <Text style={styles.headerCell}>번호</Text>
                    <Text style={styles.headerCell}>검침원 성함</Text>
                    <Text style={styles.headerCell}>노인 성함</Text>
                    <Text style={styles.headerCell}>노인 상태</Text>
                    <Text style={styles.headerCell}>지역</Text>
                    <Text style={styles.headerCell}>배정 현황</Text>
                </View>

                {/* 테이블 본문 */}
                {filteredList.map((item, index) => (
                    <View key={item.id} style={styles.tableRow}>
                        {/* 번호 */}
                        <Text style={styles.rowCell}>{index + 1}</Text>

                        {/* 검침원 성함 */}
                        <Text style={styles.rowCell}>{item.meter_reader}</Text>

                        {/* 노인 성함 */}
                        <Text style={styles.rowCell}>{item.elderly}</Text>

                        {/* 노인 상태 */}
                        <View style={styles.rowCell}>
                            {item.health_status <= 2 ? (
                                <StatusLabel status={item.health_status} type="health" />
                            ) : (
                                <Text>-</Text>
                            )}
                        </View>

                        {/* 지역 */}
                        <Text style={styles.rowCell}>{item.region}</Text>

                        {/* 배정 현황, 수정하기 */}
                        <View style={styles.assignCell}>
                            <Text style={styles.assignText}>{getAssignStatusText(item.assign_status)}</Text>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => openModal(item)}
                            >
                                <Text style={styles.editButtonText}>수정하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </Card>

            {/* 모달창 */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalContent}>
                        <Text style={modalStyles.modalTitle}>배정 수정</Text>

                        {/* 검침원 Picker */}
                        <Text style={{ marginTop: 6 }}>검침원</Text>
                        <Picker
                            selectedValue={selectedMeterReader}
                            style={modalStyles.modalPicker}
                            onValueChange={(val) => setSelectedMeterReader(val)}
                        >
                            <Picker.Item label="- (미배정)" value="" />
                            {DUMMY_METER_READERS.map((reader) => (
                                <Picker.Item key={reader} label={reader} value={reader} />
                            ))}
                        </Picker>

                        {/* 노인 Picker */}
                        <Text style={{ marginTop: 10 }}>노인</Text>
                        <Picker
                            selectedValue={selectedElderly}
                            style={modalStyles.modalPicker}
                            onValueChange={(val) => setSelectedElderly(val)}
                        >
                            <Picker.Item label="- (미배정)" value="" />
                            {DUMMY_ELDERLY.map((elder) => (
                                <Picker.Item key={elder} label={elder} value={elder} />
                            ))}
                        </Picker>

                        {/* 확인/취소 */}
                        <View style={modalStyles.buttonRow}>
                            <TouchableOpacity onPress={handleConfirm} style={modalStyles.confirmButton}>
                                <Text style={modalStyles.confirmButtonText}>확인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={modalStyles.cancelButton}>
                                <Text style={modalStyles.cancelButtonText}>취소</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ManageAssignmentPage;

// 모달 스타일
const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    modalPicker: {
        marginVertical: 4,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 18,
    },
    confirmButton: {
        backgroundColor: '#4369A3',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
        marginRight: 8,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
    },
    cancelButtonText: {
        color: '#333',
        fontWeight: '600',
    },
});
