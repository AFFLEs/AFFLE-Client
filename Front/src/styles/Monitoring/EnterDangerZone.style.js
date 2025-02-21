import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      padding: 10,
      justifyContent: "center",
    },
    header: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
    },
    searchContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    searchInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      minWidth: "20%",
      textAlign: "center",
    },
    datePickerButton: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    datePickerButtonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    pickerContainer: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      marginRight: 10,
      justifyContent: "center",
    },
    searchButton: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    searchButtonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    table: {
      marginVertical: 10,
    },
    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#EEE",
      padding: 10,
      alignItems: "center",
    },
    tableHeaderText: {
      flex: 1,
      fontWeight: "bold",
      textAlign: "center",
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#CCC",
      alignItems: "center",
    },
    tableCell: {
      flex: 1,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    success: {
      color: "green",
    },
    danger: {
      color: "red",
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
      alignItems: "center",
    },
    pageButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#DDD",
      marginHorizontal: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    pageButtonText: {
      color: "#000",
      fontWeight: "bold",
    },
    mapButton: {
      flex: 1, // 테이블 셀과 동일한 크기로 맞추기
      backgroundColor: "#55c49d", // 초록색 버튼
      paddingVertical: 10, // 세로 여백 증가
      paddingHorizontal: 15, // 가로 여백 추가
      borderRadius: 5,
      alignItems: "center", // 가로 중앙 정렬
      justifyContent: "center", // 세로 중앙 정렬
      display: "flex",
    },
    mapButtonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
    },
  });

export default styles