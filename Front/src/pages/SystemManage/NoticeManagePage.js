import React, { useState } from 'react';
import { View } from "react-native";
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

    const [selectedNotice, setSelectedNotice] = useState(DUMMY_NOTICES[0]);
    const [target, setTarget] = useState('검침원'); // 공지 대상자

    // 공지 선택
    const handleSelectNotice = (notice) => {
        setSelectedNotice(notice);
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
                        notices={DUMMY_NOTICES}
                        onSelectNotice={handleSelectNotice}
                    />
                    <NoticeDetailCard notice={selectedNotice} />
                </Card>
            </View>

            {/* 공지사항 등록 */}
            <View style={styles.rightCards}>
                <Card title="✒️ 공지사항 등록">
                    <RegisterNoticeCard
                        target={target}
                        onTargetChange={handleTargetChange}
                    />
                </Card>
            </View>
        </View>
    );
};

export default NoticeManagePage;
