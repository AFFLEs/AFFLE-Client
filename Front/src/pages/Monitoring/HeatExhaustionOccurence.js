import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import styles from "../../styles/Monitoring/HeatExhaustionOccurence.style";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native"; // ✅ 추가: 네비게이션 사용을 위한 import

const HeatExhaustionOccurence = () => {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    date: new Date(),
    actionStatus: "미조치",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      name: "김민기",
      location: "애월읍 어쩌구",
      action: "미조치",
      reason: "온열질환",
      starttimestamp: "2024-09-09 17:28:07",
      endtimestamp: "2024-09-09 17:28:07",
      latitude: 33.450701, // ✅ 추가: 위도 값
      longitude: 126.570667, // ✅ 추가: 경도 값
    },
    {
      id: 2,
      name: "박신영",
      location: "종달리 어쩌구",
      action: "조치 완료",
      reason: "낙상",
      starttimestamp: "2024-09-09 12:50:56",
      endtimestamp: "2024-09-09 12:50:56",
      latitude: 33.489011,
      longitude: 126.498302,
    },
  ]);

  const navigation = useNavigation(); // ✅ 추가: navigation 객체 가져오기

  const handleSearch = () => {
    console.log("검색 실행", searchFilters);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSearchFilters({ ...searchFilters, date: selectedDate });
    }
  };

  // ✅ 위치 확인 버튼 클릭 시 지도 화면(`MapScreen`)으로 이동하는 함수
  const handleMapPress = (latitude, longitude, locationName) => {
    if (!latitude || !longitude) {
      alert("위치 정보가 없습니다."); // ✅ 예외 처리 추가
      return;
    }
    navigation.navigate("Map", { latitude, longitude, locationName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>온열질환 발생 현황</Text>
      </View>

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

      {showDatePicker && (
        <DateTimePicker
          value={searchFilters.date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <ScrollView style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>NO</Text>
          <Text style={styles.tableHeaderText}>위치</Text>
          <Text style={styles.tableHeaderText}>성명</Text>
          <Text style={styles.tableHeaderText}>조치 상태</Text>
          <Text style={styles.tableHeaderText}>경고 사유</Text>
          <Text style={styles.tableHeaderText}>발생 시간</Text>
          <Text style={styles.tableHeaderText}>조치일시</Text>
          <Text style={styles.tableHeaderText}>지도 보기</Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.tableRow} key={item.id}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.location}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={[styles.tableCell, item.action === "조치 완료" ? styles.success : styles.danger]}>
              {item.action}
            </Text>
            <Text style={styles.tableCell}>{item.reason}</Text>
            <Text style={styles.tableCell}>{item.starttimestamp}</Text>
            <Text style={styles.tableCell}>{item.endtimestamp}</Text>
            <View style={[styles.tableCell]}>
              {/* ✅ 지도 보기 버튼 클릭 시 handleMapPress 호출 */}
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => handleMapPress(item.latitude, item.longitude, item.location)}
              >
                <Text style={styles.mapButtonText}>위치 확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

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

export default HeatExhaustionOccurence;