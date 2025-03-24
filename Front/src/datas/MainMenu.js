// 메뉴 데이터 정의
import ElderlyListPage from "../pages/SystemManage/ElderlyListPage";

const MainMenuData = [
  {
    title: '대시보드',
    routeName: 'Dashboard',
  },
  {
    title: '온열 질환 관리',
    subItems: [
      { title: '날씨 현황', routeName: 'WeatherStatus' },
      { title: '미정', routeName: 'SignupPage' },
    ],
  },
  {
    title: '위험 구역 관리',
    subItems: [
      { title: '위험 지역 목록', routeName: 'DangerZoneList' },
      { title: '미정', routeName: 'None' },
    ],
  },
  {
    title: '노인 관리',
    subItems: [
      { title: '워치 착용 현황 상세 조회', routeName: 'WatchWearingStatus' },
      { title: '방문 노인 분담표 조회', routeName: 'ElderlyDistributionTable' },
      { title: '현장 조치 상세 조회 (전체)', routeName: 'OnSiteAction' },
    ],
  },
  {
    title: '시스템 관리',
    subItems: [
      { title: '검침원 목록 관리', routeName: 'MeterReaderList' },
      { title: '노인 목록 관리', routeName: 'ElderlyList' },
      { title: '배정 관리', routeName: 'ManageAnnouncement' },
      { title: '공지사항 관리', routeName: 'ManageAnnouncement' },
    ],
  },
];

export default MainMenuData;
