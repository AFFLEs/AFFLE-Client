import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from "../../components/Card";
import MeterReaderListCard from '../../components/MeterReaderListCard';
import DashBoardModal from '../../components/DashBoardModal';
import BullentinBoardModal from '../../components/BullentinBoardModal';
import componentStyles from '../../styles/Monitoring/DashboardPageNormal.styles';
import OnSiteActionDetailModal from './OnSiteActionDetailModal';

const DashBoardPageNormal = () => {
    const DUMMY_MANAGER_DATA = [
        { manager_id: 0, name: '김민기', status: 0, work_region: '애월읍 애월리', contact: '010-1234-1234' },
        { manager_id: 1, name: '김지민', status: 0, work_region: '애월읍 장전리', contact: '010-5678-5678' },
        { manager_id: 2, name: '박영신', status: 1, work_region: '애월읍 봉성리', contact: '010-1111-2222' },
        { manager_id: 3, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 4, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 5, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
    ];

    // 날씨 관련 상태
    const [temperature, setTemperature] = useState(37);
    const [weatherDescription, setWeatherDescription] = useState('맑음');
    const [charEmoji, setCharEmoji] = useState('☀️');
    const [rainProbability, setRainProbability] = useState(30);
    const [humidity, setHumidity] = useState(60);
    const [windDirection, setWindDirection] = useState('북남');
    const [windSpeed, setWindSpeed] = useState(3);

    // 게시판 관련 상태
    const [notices, setNotices] = useState([
        { id: 1, title: "야외활동자제", content: "예상 기온이 38도를 넘어섭니다. 야외 활동을 자제하세요.", date: "2025-04-03", author: "관리자" },
        { id: 2, title: "태풍주의보", content: "태풍 주의보 발령, 강풍에 유의하세요.", date: "2025-04-02", author: "관리자" },
        { id: 3, title: "폭우주의보", content: "주말에는 폭우가 예상됩니다. 대비 바랍니다.", date: "2025-04-01", author: "관리자" },
    ]);

    const [selectedNotice, setSelectedNotice] = useState(null);
    const [isNoticeModalVisible, setIsNoticeModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [isHeatIllnessOverlayVisible, setIsHeatIllnessOverlayVisible] = useState(false);
    const [isFieldActionOverlayVisible, setIsFieldActionOverlayVisible] = useState(false);

    // 이벤트 핸들러
    const openNoticeModal = (notice) => {
        setSelectedNotice(notice);
        setIsNoticeModalVisible(true);
    };

    const closeNoticeModal = () => {
        setIsNoticeModalVisible(false);
    };

    const handleFileOpen = (fileUrl) => {
        if (fileUrl) {
            Linking.openURL(fileUrl);
        }
    };

    const handlePress = (id) => {
        setSelectedId(id);
    };

    const toggleHeatIllnessOverlay = () => {
        setIsHeatIllnessOverlayVisible(!isHeatIllnessOverlayVisible);
    };

    const toggleOnSiteActionOverlay = () => {
        setIsFieldActionOverlayVisible(!isFieldActionOverlayVisible);
    };

    // 날씨 정보 렌더링
    const renderWeatherInfo = () => (
        <Card title="금일 날씨">
            <View style={componentStyles.weatherMainContainer}>
                {/* 온도 */}
                <View style={componentStyles.weatherInfoBox}>
                    <Text style={componentStyles.infoTitle}>온도</Text>
                    <Text style={componentStyles.infoValue}>{temperature}°C</Text>
                </View>

                {/* 기상현황 */}
                <View style={componentStyles.weatherInfoBox}>
                    <Text style={componentStyles.infoTitle}>기상 현황</Text>
                    <Text style={componentStyles.infoValue}>{weatherDescription}</Text>
                </View>

                {/* 강수확률 */}
                <View style={componentStyles.weatherInfoBox}>
                    <Text style={componentStyles.infoTitle}>강수 확률</Text>
                    <Text style={componentStyles.infoValue}>{charEmoji} {rainProbability}%</Text>
                </View>
            </View>
            <View style={componentStyles.detailedWeatherContainer}>
                {/* 습도 */}
                <View style={componentStyles.detailedInfoRow}>
                    <Text style={componentStyles.detailedInfoLabel}>습도</Text>
                    <Text style={componentStyles.detailedInfoValue}>{humidity}%</Text>
                </View>
                <View style={componentStyles.separator} />
                {/* 풍향 */}
                <View style={componentStyles.detailedInfoRow}>
                    <Text style={componentStyles.detailedInfoLabel}>풍향</Text>
                    <Text style={componentStyles.detailedInfoValue}>{windDirection}</Text>
                </View>
                <View style={componentStyles.separator} />
                {/* 풍속 */}
                <View style={componentStyles.detailedInfoRow}>
                    <Text style={componentStyles.detailedInfoLabel}>풍속</Text>
                    <Text style={componentStyles.detailedInfoValue}>{windSpeed}m/s</Text>
                </View>
            </View>
        </Card>
    );

    // 방문 예정 가구 렌더링
    const renderVisitSchedule = () => (
        <Card title="금일 방문 예정 가구">
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
    );

    // 공지사항 렌더링
    const renderNotices = () => (
        <Card title="공지사항" style={{ maxHeight: 150 }}>
            <View style={{ height: 300 }}>
                <ScrollView
                    style={styles.watchScrollContainer}
                    contentContainerStyle={styles.watchScrollContent}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}>

                    {/* 헤더 */}
                    <View style={componentStyles.noticeHeader}>
                        <Text style={componentStyles.noticeHeaderText}>연번</Text>
                        <Text style={[componentStyles.noticeHeaderText, { flex: 2 }]}>내용</Text>
                        <Text style={componentStyles.noticeHeaderText}>등록 일시</Text>
                    </View>

                    {/* 공지사항 리스트 */}
                    {notices.map((notice, index) => (
                        <TouchableOpacity key={notice.id} onPress={() => openNoticeModal(notice)}>
                            <View style={componentStyles.noticeRow}>
                                <Text style={{ flex: 1 }}>{index + 1}</Text>
                                <Text style={{ flex: 2 }}>{notice.title.length > 15 ? notice.title.substring(0, 15) + "..." : notice.title}</Text>
                                <Text style={{ flex: 1 }}>{notice.date}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {renderNoticeModal()}
        </Card>
    );

    // 공지사항 모달 렌더링
    const renderNoticeModal = () => (
        isNoticeModalVisible && selectedNotice && (
            <BullentinBoardModal onClose={closeNoticeModal} visible={isNoticeModalVisible}>
                <View style={componentStyles.modalContainer}>
                    <Text style={componentStyles.modalTitle}>
                        공지사항 상세 조회
                    </Text>

                    <View style={componentStyles.modalContent}>
                        {/* 제목 행 */}
                        <View style={componentStyles.modalRow}>
                            <View style={componentStyles.modalLabel}>
                                <Text style={componentStyles.modalLabelText}>제목</Text>
                            </View>
                            <View style={componentStyles.modalValue}>
                                <Text>{selectedNotice.title}</Text>
                            </View>
                        </View>

                        {/* 작성자 및 등록일시 행 */}
                        <View style={componentStyles.modalRow}>
                            <View style={componentStyles.modalLabel}>
                                <Text style={componentStyles.modalLabelText}>작성자</Text>
                            </View>
                            <View style={componentStyles.modalAuthorValue}>
                                <Text>{selectedNotice.author}</Text>
                            </View>
                            <View style={componentStyles.modalLabel}>
                                <Text style={componentStyles.modalLabelText}>등록일시</Text>
                            </View>
                            <View style={componentStyles.modalValue}>
                                <Text>{selectedNotice.date}</Text>
                            </View>
                        </View>

                        {/* 첨부파일 행 */}
                        <View style={componentStyles.modalRow}>
                            <View style={componentStyles.modalLabel}>
                                <Text style={componentStyles.modalLabelText}>첨부파일</Text>
                            </View>
                            <View style={componentStyles.modalValue}>
                                {selectedNotice.file ? (
                                    <Text
                                        onPress={() => selectedNotice.fileUrl ? handleFileOpen(selectedNotice.fileUrl) : null}
                                        style={componentStyles.fileLink}
                                    >
                                        {selectedNotice.fileName ? selectedNotice.fileName : "첨부파일 없음"}
                                    </Text>
                                ) : (
                                    <Text>첨부파일 없음</Text>
                                )}
                            </View>
                        </View>

                        {/* 내용 행 */}
                        <View style={componentStyles.contentContainer}>
                            <Text style={componentStyles.contentText}>{selectedNotice.content}</Text>
                        </View>
                    </View>
                </View>
            </BullentinBoardModal>
        )
    );

    // 현장조치 발생 현황 렌더링
    const renderFieldActions = () => (
        <Card title="현장조치 발생 현황">
            <View style={componentStyles.fieldStatusContainer}>
                {/* 조치중 */}
                <View style={componentStyles.fieldStatusBox}>
                    <Text style={componentStyles.fieldStatusTitle}>조치중</Text>
                    <View style={componentStyles.fieldStatusValueContainer}>
                        <Text style={componentStyles.fieldStatusValue}>4</Text>
                    </View>
                </View>

                {/* 조치완료 */}
                <View style={componentStyles.fieldStatusCompleteBox}>
                    <Text style={componentStyles.fieldStatusTitle}>조치완료</Text>
                    <View style={componentStyles.fieldStatusValueContainer}>
                        <Text style={componentStyles.fieldStatusValue}>4</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={toggleOnSiteActionOverlay} style={styles.arrowButton}>
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
        </Card>
    );

    // 지도 렌더링
    const renderMap = () => (
        <Card title="지도">
            {/* 지도 내용 */}
        </Card>
    );

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.mainWrapper}>
                    {/* 왼쪽 카드 */}
                    <View style={styles.leftCards}>
                        {renderVisitSchedule()}
                        {renderWeatherInfo()}
                        {renderNotices()}
                    </View>

                    {/* 오른쪽 카드 */}
                    <View style={styles.rightCards}>
                        {renderFieldActions()}
                        {renderMap()}
                    </View>
                </View>
            </ScrollView>

            {/* 오버레이 모달 */}
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

export default DashBoardPageNormal;