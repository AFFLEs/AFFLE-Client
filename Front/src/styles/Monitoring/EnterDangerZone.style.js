import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /** ✅ 화면 전체 컨테이너 */
  container: {
    flex: 1, // 화면 전체 차지
    backgroundColor: "#F5F5F5", // 연한 회색 배경
    padding: 10, // 내부 여백
    justifyContent: "center", // 내부 요소 중앙 정렬
  },

  /** ✅ 상단 제목(Header) 스타일 */
  header: {
    backgroundColor: "#007BFF", // 파란색 배경
    padding: 10, // 내부 여백 추가
    borderRadius: 5, // 둥근 모서리
    marginBottom: 10, // 아래 간격 추가
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "center", // 수평 중앙 정렬
  },

  /** ✅ 제목 텍스트 스타일 */
  headerTitle: {
    color: "#FFFFFF", // 흰색 글씨
    fontWeight: "bold", // 볼드체
    fontSize: 18, // 글씨 크기
    textAlign: "center", // 중앙 정렬
  },

  /** ✅ 검색 입력란 및 필터 정렬 스타일 */
  searchContainer: {
    flexDirection: "row", // 가로 정렬
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "space-between", // 요소 간격 균등 배치
    paddingVertical: 10, // 상하 패딩
    paddingHorizontal: 5, // 좌우 패딩
    width: "100%", // 전체 너비 사용
  },

  /** ✅ 성명 입력 필드 */
  searchInput: {
    flex: 1, // 동일한 비율로 너비 차지
    height: 45, // 입력창 높이
    borderWidth: 1, // 테두리 추가
    borderColor: "#ccc", // 연한 회색 테두리
    borderRadius: 5, // 둥근 모서리
    padding: 10, // 내부 여백
    textAlign: "center", // 입력 텍스트 중앙 정렬
    backgroundColor: "#FFFFFF", // 배경 흰색
    marginHorizontal: 5, // 양쪽 간격 조정
  },

  /** ✅ 날짜 선택 버튼 */
  datePickerButton: {
    height: 45, // 버튼 높이
    backgroundColor: "#007BFF", // 파란색 배경
    paddingHorizontal: 15, // 좌우 패딩
    borderRadius: 5, // 둥근 모서리
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "center", // 수평 중앙 정렬
    marginHorizontal: 5, // 양쪽 간격 조정
  },

  /** ✅ 날짜 선택 버튼 텍스트 */
  datePickerButtonText: {
    color: "#FFFFFF", // 흰색 글씨
    fontWeight: "bold", // 볼드체
  },

  /** ✅ 조치 상태 선택 드롭다운 */
  pickerContainer: {
    flex: 1, // 동일한 너비 비율
    height: 45, // 높이 설정
    borderWidth: 1, // 테두리 추가
    borderColor: "#ccc", // 테두리 색상
    borderRadius: 5, // 둥근 모서리
    backgroundColor: "#FFFFFF", // 배경 흰색
    justifyContent: "center", // 내용 중앙 정렬
    marginHorizontal: 5, // 양쪽 간격 조정
  },

  /** ✅ 검색 버튼 */
  searchButton: {
    height: 45, // 버튼 높이
    backgroundColor: "#007BFF", // 파란색 배경
    paddingHorizontal: 15, // 좌우 패딩
    borderRadius: 5, // 둥근 모서리
    alignItems: "center", // 수직 중앙 정렬
    justifyContent: "center", // 수평 중앙 정렬
    marginHorizontal: 5, // 양쪽 간격 조정
  },

  /** ✅ 검색 버튼 텍스트 */
  searchButtonText: {
    color: "#FFFFFF", // 흰색 글씨
    fontWeight: "bold", // 볼드체
  },

  /** ✅ 테이블 스타일 */
  table: {
    width: "100%", // 전체 너비 사용
    marginVertical: 10, // 위아래 간격
  },

  /** ✅ 테이블 헤더 스타일 */
  tableHeader: {
    flexDirection: "row", // 가로 정렬
    justifyContent: "space-between", // 요소 간격 조정
    backgroundColor: "#EEE", // 연한 회색 배경
    paddingVertical: 12, // 상하 패딩
    paddingHorizontal: 5, // 좌우 패딩
    alignItems: "center", // 중앙 정렬
    width: "100%", // 전체 너비 사용
  },

  /** ✅ 테이블 헤더 텍스트 */
  tableHeaderText: {
    flex: 1, // 동일한 너비 비율 유지
    fontWeight: "bold", // 볼드체
    textAlign: "center", // 중앙 정렬
  },

  /** ✅ 테이블 행 스타일 */
  tableRow: {
    flexDirection: "row", // 가로 정렬
    justifyContent: "space-between", // 요소 간격 조정
    paddingVertical: 12, // 상하 패딩
    paddingHorizontal: 5, // 좌우 패딩
    borderBottomWidth: 1, // 구분선 추가
    borderBottomColor: "#CCC", // 구분선 색상
    alignItems: "center", // 중앙 정렬
    width: "100%", // 전체 너비 사용
  },

  /** ✅ 테이블 셀 스타일 */
  tableCell: {
    flex: 1, // 동일한 크기 유지
    textAlign: "center", // 텍스트 중앙 정렬
    justifyContent: "center", // 내용 중앙 정렬
    alignItems: "center", // 아이템 중앙 정렬
    display: "flex",
  },

  /** ✅ 조치 상태 버튼 컨테이너 */
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  /** ✅ 조치 상태 버튼 */
  statusButton: {
    width: 110,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  /** ✅ 조치 완료 버튼 */
  successButton: {
    backgroundColor: "#28a745", // 녹색
  },

  /** ✅ 미조치 버튼 */
  dangerButton: {
    backgroundColor: "#dc3545", // 빨간색
  },

  /** ✅ 조치 버튼 텍스트 */
  statusButtonText: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  /** ✅ 지도 확인 버튼 */
  mapButton: {
    width: 110,
    backgroundColor: "#55c49d",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  /** ✅ 지도 확인 버튼 텍스트 */
  mapButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /** ✅ 모달 배경 */
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
    justifyContent: "center",
    alignItems: "center",
  },

  /** ✅ 모달 컨테이너 */
  modalContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 10, // 그림자 효과 추가
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalInput: {
    width: "100%",
    height: 80,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: "top",
  },

  /** ✅ 모달 버튼 컨테이너 */
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  modalButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },

  resetButton: {
    backgroundColor: "#dc3545",
  },

  cancelButton: {
    backgroundColor: "gray",
    marginLeft: 10,
  },

  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;


