import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Alert} from "react-native";
import styles from '../../styles/SystemManage/ListPage.styles';
import Card from "../../components/Card";
import MeterReaderNoticeListCard from "../../components/MeterReaderNoticeListCard";
import NoticeDetailCard from "../../components/NoticeDetailCard";
import RegisterNoticeCard from "../../components/RegisterNoticeCard";

const NoticeManagePage = () => {
    const DUMMY_NOTICES  = [
        {
            id: '1',
            title: '2024년 마무리하며 감사한 마음을 전달합니다.',
            content: '1년 간 열심히 수고해주신...',
            author: '김총괄',
            date: '2024.12.24 (화)',
            attachment: '2024_연말_인사.hwp',
        },
        {
            id: '2',
            title: '[필독] 금일 근무 검침원 확인 바람',
            content: '금일 근무하시는 분들의...',
            author: '박총괄',
            date: '2024.12.16 (월)',
            attachment: '-',
        },
    ];

    const [notices, setNotices] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(DUMMY_NOTICES[0]);
    const [isRegistering, setIsRegistering] = useState(false);
    const [target, setTarget] = useState('검침원'); // 공지 대상자

    const fetchNotices = async () => {
        try {
            // API 요청 GET
            setNotices(DUMMY_NOTICES);
        } catch (error) {
            console.error(error);
            Alert.alert('오류', '공지 목록을 불러오는데 실패했습니다.');
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);



    // 공지 선택
    const handleSelectNotice = (notice) => {
        setSelectedNotice(notice);
        setIsRegistering(false);
    };

    const handleRegister = () => {
        setIsRegistering(true);
        setSelectedNotice(null);
    };

    // 공지 대상자 변경
    const handleTargetChange = (newTarget) => {
        setTarget(newTarget);
    };

    return (
        <View style={styles.container}>
            {/* 공지사항 조회 */}
            <View style={styles.leftCards}>
                <Card title="📢 검침원 공지사항">
                    <MeterReaderNoticeListCard
                        notices={notices}
                        onSelectNotice={handleSelectNotice}
                    />
                    <TouchableOpacity style={styles.Button} onPress={handleRegister}>
                        <Text style={styles.ButtonText}>등록하기</Text>
                    </TouchableOpacity>
                </Card>
            </View>

            {/* 공지사항 등록 */}
            <View style={styles.rightCards}>
                <Card title={isRegistering ? "📝 공지사항 등록" : "✅ 공지사항 상세 조회"}>
                    {isRegistering ? (
                        <RegisterNoticeCard
                            target={target}
                            onTargetChange={handleTargetChange}
                            onRegisterComplete={(newNotice) => {
                                setIsRegistering(false);
                                fetchNotices();
                                setSelectedNotice(newNotice);
                            }}
                        />
                    ) : (
                        <NoticeDetailCard notice={selectedNotice} />
                    )}
                </Card>
            </View>
        </View>
    );
};

export default NoticeManagePage;
