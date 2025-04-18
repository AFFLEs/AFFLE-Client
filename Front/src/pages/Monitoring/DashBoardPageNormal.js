import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Card from "../../components/Card";
import ElderlyListCard from '../../components/ElderlyListCard';
import DashBoardModal from '../../components/DashBoardModal';
import BullentinBoardModal from '../../components/BullentinBoardModal';
import componentStyles from '../../styles/Monitoring/DashboardPageNormal.styles';
import styles from '../../styles/Monitoring/DashboardPage.styles';
import OnSiteActionDetailModalNormal from './OnSiteActionDetailModalNormal';
import HeatIllnessDetailModalNormal from './HeatIllnessDetailModalNormal'; // Make sure this is imported
import { originalElderlyData } from '../ElderlyManagement/MyElderlyInfoPage';

const DashBoardPageNormal = () => {
    const DUMMY_MANAGER_DATA = [
        { manager_id: 0, name: '김민기', status: 0, work_region: '애월읍 애월리', contact: '010-1234-1234' },
        { manager_id: 1, name: '김지민', status: 0, work_region: '애월읍 장전리', contact: '010-5678-5678' },
        { manager_id: 2, name: '박영신', status: 1, work_region: '애월읍 봉성리', contact: '010-1111-2222' },
        { manager_id: 3, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 4, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
        { manager_id: 5, name: '한예원', status: 2, work_region: '애월읍 고성리', contact: '010-9999-8888' },
    ];

    const [temperature, setTemperature] = useState(37);
    const [weatherDescription, setWeatherDescription] = useState('맑음');
    const [charEmoji, setCharEmoji] = useState('☀️');
    const [rainProbability, setRainProbability] = useState(30);
    const [humidity, setHumidity] = useState(60);
    const [windDirection, setWindDirection] = useState('북남');
    const [windSpeed, setWindSpeed] = useState(3);

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

    const renderVisitSchedule = () => {
        const navigation = useNavigation();

        const handlePress = (elderly) => {
            // 노인 선택 시 MyElderlyInfoPage로 이동
            navigation.navigate('MyElderlyInfo', { elderly });
        };

        return (
            <Card title="금일 방문 예정 가구">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={componentStyles.list}>
                        {originalElderlyData.map((elderly, index) => (
                            <View style={componentStyles.listItem} key={index}>
                                <ElderlyListCard
                                    elderly={{
                                        name: elderly.name,
                                        gender: elderly.gender,
                                        age: elderly.age,
                                        region: `${elderly.address.split(' ')[2]} ${elderly.address.split(' ')[3]}`, // @@읍 @@길까지만 표시
                                        recentVisit: elderly.recentVisit,
                                        feature: elderly.type, // 특징 추가 (치매질환 등) 근데 myelderly에 없는 정보임.
                                    }}
                                    selected={selectedId === index}
                                    onPress={() => handlePress(elderly)} 
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </Card>
        );
    };



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
        </Card>
    );

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

    const renderMap = () => (
        <Card title="지도">
            {/* 지도 내용 */}
            <Text>지도가 이곳에 표시됩니다</Text>
        </Card>
    );

    // Heat illness rendering
    const renderHeatIllness = () => (
        <Card title="온열질환 경고 알림 현황">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 10 }}>
                {/* 주의 카드 */}
                <View style={{ backgroundColor: '#FF9C00', flex: 1, padding: 10, marginRight: 5, borderRadius: 8 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>주의</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>4</Text>
                    </View>
                </View>

                {/* 경고 카드 */}
                <View style={{ backgroundColor: '#FF5F00', flex: 1, padding: 10, marginRight: 5, borderRadius: 8 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>경고</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>4</Text>
                    </View>
                </View>

                {/* 위험 카드 */}
                <View style={{ backgroundColor: '#FF0716', flex: 1, padding: 10, borderRadius: 8 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>위험</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>4</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={toggleHeatIllnessOverlay} style={styles.arrowButton}>
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
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
                        {renderHeatIllness()}
                        {renderMap()}
                    </View>
                </View>
            </ScrollView>

            <BullentinBoardModal onClose={closeNoticeModal} visible={isNoticeModalVisible} animationType="none">
                {selectedNotice && (
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
                )}
            </BullentinBoardModal>

            {isHeatIllnessOverlayVisible && (
                <DashBoardModal onClose={toggleHeatIllnessOverlay} visible={isHeatIllnessOverlayVisible}>
                    <HeatIllnessDetailModalNormal />
                </DashBoardModal>
            )}
            {isFieldActionOverlayVisible && (
                <DashBoardModal onClose={toggleOnSiteActionOverlay} visible={isFieldActionOverlayVisible}>
                    <OnSiteActionDetailModalNormal />
                </DashBoardModal>
            )}
        </>
    );
};

export default DashBoardPageNormal;