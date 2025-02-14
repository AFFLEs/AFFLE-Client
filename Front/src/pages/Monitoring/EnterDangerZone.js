import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const DangerZoneDashboard = () => {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    date: new Date(),
    actionStatus: "미조치",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [data, setData] = useState([
    { id: 1, name: "김민기", location: "애월읍", action: "미조치", timestamp: "2024-09-09 17:28:07" },
    { id: 2, name: "박신영", location: "고성리", action: "조치 완료", timestamp: "2024-09-09 12:50:56" },
  ]);

  const handleSearch = () => {
    console.log("검색 실행", searchFilters);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Picker 닫기
    if (selectedDate) {
      setSearchFilters({ ...searchFilters, date: selectedDate }); // 선택한 날짜 저장
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>위험구역 출입 현황</Text>
      </View>

      {/* 검색 영역 */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="성명"
          value={searchFilters.name}
          onChangeText={(value) => setSearchFilters({ ...searchFilters, name: value })}
        />
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerButtonText}>날짜 선택</Text>
        </TouchableOpacity>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={searchFilters.actionStatus}
            onValueChange={(itemValue) => setSearchFilters({ ...searchFilters, actionStatus: itemValue })}
          >
            <Picker.Item label="미조치" value="미조치" />
            <Picker.Item label="조치 완료" value="조치 완료" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      </View>

      {/* DateTimePicker */}
      {showDatePicker && (
        <DateTimePicker
          value={searchFilters.date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* 경고 이력 테이블 */}
      <ScrollView style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>NO</Text>
          <Text style={styles.tableHeaderText}>지점</Text>
          <Text style={styles.tableHeaderText}>성명</Text>
          <Text style={styles.tableHeaderText}>조치 상태</Text>
          <Text style={styles.tableHeaderText}>발생 시간</Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.tableRow} key={item.id}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.location}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={[styles.tableCell, item.action === "조치 완료" ? styles.success : styles.danger]}>
              {item.action}
            </Text>
            <Text style={styles.tableCell}>{item.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 페이지 네이션 */}
      <View style={styles.pagination}>
        {[1, 2, 3, 4, 5].map((page) => (
          <TouchableOpacity key={page} style={styles.pageButton}>
            <Text style={styles.pageButtonText}>{page}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  header: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    minWidth: "20%",
  },
  datePickerButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
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
  },
  searchButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
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
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
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
  },
  pageButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#DDD",
    marginHorizontal: 5,
  },
  pageButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default DangerZoneDashboard;
