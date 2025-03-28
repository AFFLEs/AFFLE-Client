import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';


const OnSiteActionDetailModal = ({ onClose }) => {
    const [actionStatus, setActionStatus] = useState('inProgress');
    const [actionInProgress, setActionInProgress] = useState([
        { name: '이준호', checker: '홍길동', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.03.15 10:00', assignTime: '' },
        { name: '박정수', checker: '이민수', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.03.16 11:00', assignTime: '2025.03.16 11:05' },
        { name: '장희영', checker: '최수진', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.17 14:30', assignTime: '2025.03.17 14:35' },
        { name: '오세영', checker: '김지민', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.18 09:00', assignTime: '' },
        { name: '오세영', checker: '김지민', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.18 09:00', assignTime: '' },
        { name: '오세영', checker: '김지민', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.18 09:00', assignTime: '' },
        { name: '오세영', checker: '김지민', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.18 09:00', assignTime: '' },
        { name: '한상민', checker: '박정수', location: '애월읍 고내리', cause: '온열 질환', detectTime: '2025.03.19 13:00', assignTime: '2025.03.19 13:05' },
        { name: '이준호', checker: '홍길동', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.03.20 10:30', assignTime: '2025.03.20 10:35' },
        { name: '박정수', checker: '이민수', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.21 12:30', assignTime: '2025.03.21 12:35' },
        { name: '장희영', checker: '최수진', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.22 15:00', assignTime: '2025.03.22 15:05' },
        { name: '오세영', checker: '김지민', location: '애월읍 고내리', cause: '온열 질환', detectTime: '2025.03.23 12:45', assignTime: '2025.03.23 12:50' },
        { name: '한상민', checker: '박정수', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.24 16:00', assignTime: '2025.03.24 16:05' },
        { name: '이준호', checker: '홍길동', location: '애월읍 고내리', cause: '온열 질환', detectTime: '2025.03.25 18:30', assignTime: '2025.03.25 18:35' }
    ]);

    const [actionCompleted, setActionCompleted] = useState([
     { name: '박신영', checker: '김민지', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.01.12 23:55', completeTime: '2025.01.12 22:30' },
     { name: '김기민', checker: '한원예', location: '애월읍 고내리', cause: '온열질환', detectTime: '2025.02.12 22:05', completeTime: '2025.01.12 23:00' },
    ]);

    const [inProgressSortConfig, setInProgressSortConfig] = useState({ key: 'detectTime', direction: 'asc' });
    const [completedSortConfig, setCompletedSortConfig] = useState({ key: 'detectTime', direction: 'asc' });

    const sortData = (data, sortConfig) => {
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return -1 * direction;
            if (a[sortConfig.key] > b[sortConfig.key]) return 1 * direction;
            return 0;
        });
    };

    const handleSort = (key, table) => {
        if (table === 'inProgress'){
            setInProgressSortConfig((prevConfig) => {
              if (prevConfig.key === key) {
                return { ...prevConfig, direction: prevConfig.direction === 'asc' ? 'desc' : 'asc' };
              }
              return { key, direction: 'asc' };
            });
        } else if (table === 'completed'){
            setCompletedSortConfig((prevConfig) => {
                if (prevConfig.key === key) {
                  return { ...prevConfig, direction: prevConfig.direction === 'asc' ? 'desc' : 'asc' };
                }
                return { key, direction: 'asc' };
            });
        }
    };

    const handleActionStatusChange = (row, currentTable, targetTable) => {
        if (currentTable === 'inProgress') {
            const updatedInProgress = actionInProgress.filter(item => item !== row);
            const updatedCompleted = [...actionCompleted, {...row, status: '조치 완료'}];

            setActionInProgress(updatedInProgress);
            setActionCompleted(updatedCompleted);
        } else {
            const updatedCompleted = actionCompleted.filter(item => item !== row);
            const updatedInProgress = [...actionInProgress, {...row, status: '조치 중'}];

            setActionCompleted(updatedCompleted);
            setActionInProgress(updatedInProgress);
        }
    };

    const sortedInProgressData = sortData(actionInProgress, inProgressSortConfig);
    const sortedCompletedData = sortData(actionCompleted, completedSortConfig);

    const showAlert = (row) => {
      Alert.alert(
        `담당자 ${row.checker}에게 조치 요망 알림을 보냈습니다.`,
        "",
        [{ text: "확인", style: "default" }]
      );
    };

    const handleChangeStatus = (status) => {
        setActionStatus(status);
    };

    return (
      <View style={styles.modalContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.leftColumn}>
                <View style={styles.leftTitleContainer}>
                    <Text style={styles.title}>담당 현장 조치 및 현황</Text>
                    <Text style={styles.subTitle}>*전체 노인 대상 현황</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.toggleButton, actionStatus === 'inProgress' ? styles.activeButton : null]}
                    onPress={() => handleChangeStatus('inProgress')}
                  >
                    <Text style={actionStatus === 'inProgress' ? styles.activeText : styles.buttonText}>조치 중</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.toggleButton, actionStatus === 'completed' ? styles.activeButton : null]}
                    onPress={() => handleChangeStatus('completed')}
                  >
                    <Text style={actionStatus === 'completed' ? styles.activeText : styles.buttonText}>조치 완료</Text>
                  </TouchableOpacity>
                </View>

                {actionStatus === 'inProgress' && (
                    <View>
                    <Text style={[styles.subTitle, {top:-4, marginBottom: 4}]}>*노인의 이름을 누르면 현황 지도로 위치 파악이 가능합니다.</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <TouchableOpacity onPress={() => handleSort('name','inProgress')} style={[styles.touchableCell,styles.nameCell]} >
                                  <Text style={styles.header}>성명</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('checker','inProgress')} style={[styles.touchableCell, styles.nameCell]}>
                                    <Text style={styles.header}>담당자</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('location','inProgress')} style={[styles.touchableCell, styles.locationCell]}>
                                    <Text style={styles.header}>위치</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('cause','inProgress')} style={[styles.touchableCell, styles.causeCell]}>
                                    <Text style={styles.header}>원인</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('detectTime','inProgress')} style={[styles.touchableCell]}>
                                    <Text style={styles.header}>위험감지시각</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('assignTime','inProgress')} style={[styles.touchableCell, styles.assignTimeCell]}>
                                    <Text style={styles.header}>담당배정시각</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.tableWrapper}>
                            {sortedInProgressData.map((row, idx) => (
                              <View key={idx} style={styles.tableRow}>
                                <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
                                <Text style={[styles.cell, styles.checkerCell]}>{row.checker}</Text>
                                <Text style={[styles.cell, styles.locationCell]}>{row.location}</Text>
                                <Text style={[styles.cell, styles.causeCell]}>{row.cause}</Text>
                                <Text style={[styles.cell, styles.detectTimeCell]}>
                                  {row.detectTime.split(' ')[0]}
                                  {'\n'}
                                  {row.detectTime.split(' ')[1]}
                                </Text>
                                <Text style={[styles.cell, styles.assignTimeCell]}>
                                  {row.assignTime.split(' ')[0]}
                                  {'\n'}
                                  {row.assignTime.split(' ')[1]}
                                </Text>
                              </View>
                            ))}
                            </ScrollView>
                        </View>
                  </View>
                )}

                {actionStatus === 'completed' && (
                    <View>
                    <Text style={[styles.subTitle, {top:-4, marginBottom: 4}]}>*노인의 이름을 누르면 현황 지도로 위치 파악이 가능합니다.</Text>

                        <View style={styles.table}>
                          <View style={styles.tableRow}>
                            <TouchableOpacity onPress={() => handleSort('name','completed')} style={[styles.touchableCell,styles.nameCell]} >
                              <Text style={styles.header}>성명</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('checker','completed')} style={[styles.touchableCell, styles.nameCell]}>
                              <Text style={styles.header}>담당자</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('location','completed')} style={[styles.touchableCell, styles.locationCell]}>
                              <Text style={styles.header}>위치</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('cause','completed')} style={[styles.touchableCell, styles.causeCell]}>
                              <Text style={styles.header}>원인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('detectTime','completed')} style={[styles.touchableCell]}>
                              <Text style={styles.header}>위험감지시각</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('completeTime','completed')} style={[styles.touchableCell, styles.assignTimeCell]}>
                              <Text style={styles.header}>조치완료시각</Text>
                            </TouchableOpacity>
                          </View>
                          <ScrollView style={styles.tableWrapper}>
                          {sortedCompletedData.map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                              <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
                              <Text style={[styles.cell, styles.checkerCell]}>{row.checker}</Text>
                              <Text style={[styles.cell, styles.locationCell]}>{row.location}</Text>
                              <Text style={[styles.cell, styles.causeCell]}>{row.cause}</Text>
                              <Text style={[styles.cell, styles.detectTimeCell]}>
                                {row.detectTime.split(' ')[0]}
                                {'\n'}
                                {row.detectTime.split(' ')[1]}
                              </Text>
                              <Text style={[styles.cell, styles.assignTimeCell]}>
                                {row.completeTime.split(' ')[0]}
                                {'\n'}
                                {row.completeTime.split(' ')[1]}
                              </Text>
                            </View>
                          ))}
                          </ScrollView>
                        </View>
                    </View>
                )}
            </View>

            {actionStatus === 'inProgress' && (
                <View style={styles.rightColumn}>
                    <Text style={[styles.title, {marginTop:10}]}>현황 지도</Text>
                    <Text style={{ marginBottom: 300 }}>지도 들어갈 예정</Text>
                    <Text style={[styles.title, {marginTop:10, marginBottom:10}]}>담당자 선택 배정</Text>
                    <View>
                        <View style={styles.table}>
                            <View style={[styles.tableRow,]}>
                                <TouchableOpacity onPress={() => handleSort('name','inProgress')} style={[styles.touchableCell, styles.nameCell]} >
                                <Text style={styles.header}>성명</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('location','inProgress')} style={[styles.touchableCell,styles.locationCell]}>
                                    <Text style={styles.header}>위치</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('cause','inProgress')} style={[styles.touchableCell,styles.causeCell]}>
                                    <Text style={styles.header}>원인</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('detectTime','inProgress')} style={[styles.touchableCell, styles.detectTimeCell]}>
                                    <Text style={styles.header}>위험감지시각</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('detectTime','inProgress')} style={[styles.touchableCell, styles.detectTimeCell]}>
                                    <Text style={styles.header}>  </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{height:200}}>
                                {actionInProgress
                                    .filter(row => !row.assignTime)  // assignTime이 없는 데이터만 필터링
                                    .map((row, idx) => (
                                    <View key={idx} style={styles.tableRow}>
                                        <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
                                        <Text style={[styles.cell, styles.locationCell]}>{row.location}</Text>
                                        <Text style={[styles.cell, styles.causeCell]}>{row.cause}</Text>
                                        <Text style={[styles.cell, styles.detectTimeCell]}>
                                            {row.detectTime.split(' ')[0]}
                                            {'\n'}
                                            {row.detectTime.split(' ')[1]}
                                        </Text>
                                        <Text style = {styles.detectTimeCell}>검침원 찾기</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            )}


           {actionStatus === 'completed' && (
           <View style={styles.rightColumn}>
             <Text style={[styles.title, {marginTop:10}]}>현황 지도</Text>
           </View>
          )}
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
leftTitleContainer :{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 6,
},
buttonContainer:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 6,
},
toggleButton: {
    marginRight: 20,
    marginBottom: 5,
    alignItems: 'center',
},
buttonText: {
    fontWeight: 'bold',
    color: '#808080',
},
activeText: {
    color: '#000000',
    fontWeight: 'bold',
},
modalContainer: {
  paddingHorizontal: 18,
  width: '100%',
  maxHeight: '100%',
  top: -80,
},
tableWrapper: {
  height: 500,
  borderColor: '#ccc',
  marginBottom: 12,
  overflow: 'hidden',
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
  marginRight: 10,
},
subTitle: {
  fontSize: 12,
  fontWeight: '500',
},
rowContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width:'100%',
},
leftColumn: {
  flex: 1,
  marginRight: 10,
},
rightColumn: {
  flex: 1,
  marginLeft:15,
},
table: {
  borderColor: '#ccc',
  marginBottom: 10,
  width:'100%',
},

tableRow: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#ccc',
  alignItems: 'center',
},
header: {
    fontWeight: 'bold',

},
headerRight:{
    flex: 1,
    fontWeight: 'bold',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#eee',
},
cell: {
  padding: 6,
  textAlign: 'center',
},
touchableCell: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 6,
},
nameCell: {
    width: '11%',
  },
  checkerCell: {
    width: '11%',
  },
  locationCell: {
    width: '23%',
  },
  causeCell: {
    width: '15%',
  },
  detectTimeCell: {
    flex: 1,
    width: '25%',
  },
  assignTimeCell: {
    flex: 1,
    width: '25%',
  },
notice: {
    marginTop: 50,
    padding:6,
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCE3F0',
},
footnote: {
  fontSize: 12,
  color: '#888',
  marginBottom: 10,
  marginTop:10,
},
alertButton: {
  textDecorationLine: 'underline',
  textAlign: 'center',
},
inprogressBtn: {
  backgroundColor: 'rgba(217, 217, 217, 0.4)',
  borderRadius: 50,
  textAlign: 'center',
  justifyContent: 'center',
  height:20,
},
completeBtn: {
  backgroundColor:'rgba(104, 219, 98, 0.5)',
  borderRadius: 50,
  textAlign: 'center',
  justifyContent: 'center',
  height:20,
},
});

export default OnSiteActionDetailModal;