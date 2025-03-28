import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from "../../styles/Monitoring/EnterDangerZone.style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const EnterDangerZone = () => {
  /** ✅ 검색 필터 상태를 관리하는 state */
  const [searchFilters, setSearchFilters] = useState({
    name: "", // 입력된 성명
    date: new Date(), // 기본 날짜 (오늘 날짜)
    actionStatus: "미조치", // 기본 조치 상태
  });

  /** ✅ 날짜 선택 모달을 열거나 닫는 state */
  const [showDatePicker, setShowDatePicker] = useState(false);

  /** ✅ 조치 상태 변경을 위한 모달 관련 state */
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 데이터 항목
  const [actionDetails, setActionDetails] = useState(""); // 조치 세부 사항 입력
  const [modalVisible, setModalVisible] = useState(false); // 모달 표시 여부

  /** ✅ 위험구역 출입 기록 데이터 */
  const [data, setData] = useState([
    {
      id: 1,
      name: "김민기",
      location: "애월읍 어쩌구",
      action: "미조치",
      reason: "위험구역 출입",
      starttimestamp: "2024-09-09 17:28:07",
      endtimestamp: "",
      latitude: 33.450701,
      longitude: 126.570667,
      details: "",
    },
    {
      id: 2,
      name: "박신영",
      location: "종달리 어쩌구",
      action: "조치 완료",
      reason: "위험구역 출입",
      starttimestamp: "2024-09-09 12:50:56",
      endtimestamp: "2024-09-09 12:50:56",
      latitude: 33.489011,
      longitude: 126.498302,
      details: "응급 처치 완료 후 병원 이송",
    },
  ]);

  /** ✅ 네비게이션 객체 (위치 확인 시 사용) */
  const navigation = useNavigation();

  /** ✅ 검색 버튼 클릭 시 실행되는 함수 */
  const handleSearch = () => {
    console.log("검색 실행", searchFilters);
  };

  /** ✅ 날짜 선택 시 실행되는 함수 */
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSearchFilters({ ...searchFilters, date: selectedDate });
    }
  };

  /** ✅ 위치 확인 버튼 클릭 시 지도 화면으로 이동 */
  const handleMapPress = (latitude, longitude, locationName) => {
    if (!latitude || !longitude) {
      alert("위치 정보가 없습니다.");
      return;
    }
    navigation.navigate("Map", { latitude, longitude, locationName });
  };

  /** ✅ 조치 상태 버튼 클릭 시 모달을 여는 함수 */
  const handleActionPress = (item) => {
    setSelectedItem(item); // 선택된 데이터 저장
    setActionDetails(item.details); // 기존 조치 세부 사항 입력란에 표시
    setModalVisible(true); // 모달 열기
  };

  /** ✅ "조치 완료" 버튼 클릭 시 데이터 업데이트 */
  const handleActionComplete = () => {
    setData((prevData) =>
      prevData.map((d) =>
        d.id === selectedItem.id
          ? { ...d, action: "조치 완료", details: actionDetails }
          : d
      )
    );
    setModalVisible(false);
  };

  /** ✅ "미조치로 변경" 버튼 클릭 시 다시 미조치 상태로 변경 */
  const handleResetAction = () => {
    setData((prevData) =>
      prevData.map((d) =>
        d.id === selectedItem.id ? { ...d, action: "미조치", details: "" } : d
      )
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* ✅ 화면 상단 제목 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>위험구역 출입 현황</Text>
      </View>

      {/* ✅ 검색 입력 필드 및 필터 선택 UI */}
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
        <DateTimePicker value={searchFilters.date} mode="date" display="default" onChange={handleDateChange} />
      )}

      {/* ✅ 데이터 테이블 */}
      <ScrollView style={styles.table}>
        <View style={styles.tableHeader}>
          {["NO", "위치", "성명", "조치 상태", "경고 사유", "발생 시간", "조치일시", "지도 보기"].map((header) => (
            <Text key={header} style={styles.tableHeaderText}>{header}</Text>
          ))}
        </View>

        {data.map((item, index) => (
          <View style={styles.tableRow} key={item.id}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.location}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>

            {/* 조치 상태 버튼 */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.statusButton,
                  item.action === "조치 완료" ? styles.successButton : styles.dangerButton,
                ]}
                onPress={() => handleActionPress(item)}
              >
                <Text style={styles.statusButtonText}>{item.action}</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.tableCell}>{item.reason}</Text>
            <Text style={styles.tableCell}>{item.starttimestamp}</Text>
            <Text style={styles.tableCell}>{item.endtimestamp}</Text>

            {/* 위치 확인 버튼 */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.mapButton} onPress={() => handleMapPress(item.latitude, item.longitude, item.location)}>
                <Text style={styles.mapButtonText}>위치 확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* ✅ 조치 상태 모달 */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>조치 세부 사항</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="세부 사항 입력"
              value={actionDetails}
              onChangeText={setActionDetails}
              multiline
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[
                  styles.modalButton,
                  selectedItem?.action === "조치 완료" ? styles.resetButton : null,
                ]} onPress={selectedItem?.action === "조치 완료" ? handleResetAction : handleActionComplete}>
                <Text style={styles.modalButtonText}>
                  {selectedItem?.action === "조치 완료" ? "미조치로 변경" : "조치 완료"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EnterDangerZone;