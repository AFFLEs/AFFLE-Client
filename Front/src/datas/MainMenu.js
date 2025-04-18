// 메뉴 데이터 정의
const MainMenuData = [
  {
    title: '대시보드',
    routeName: 'Dashboard',
  },
  {
    title: '온열 질환 관리',
    subItems: [
      { title: '온열 발생 현황 및 조치', routeName: 'HeatExhaustionOccurence' },
    ],
  },
  {
    title: '위험 구역 관리',
    subItems: [
      { title: '위험 지역 목록', routeName: 'EnterDangerZone' },
      { title: '낙상 발생 현황 및 조치', routeName: 'FallOccurrence' },
    ],
  },
  {
    title: '노인 관리',
    subItems: [
      { title: '내 담당 노인 정보 조회', routeName: 'MyElderlyInfo' },
      { title: '담당자별 방문 노인 분담표', routeName: 'AllElderlyInfo' },
      { title: '워치 착용 현황 및 관리', routeName: 'WatchWearingStatus' },
    ],
  },
  {
    title: '시스템 관리',
    subItems: [
      { title: '검침원 목록 관리', routeName: 'MeterReaderList' },
      { title: '노인 목록 관리', routeName: 'ElderlyList' },
      { title: '배정 관리', routeName: 'ManageAssignment' },
      { title: '공지사항 관리', routeName: 'NoticeManage' },
    ],
  },
];

export default MainMenuData;
