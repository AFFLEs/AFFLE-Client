import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';

const HeatIllnessDetailModal = ({ onClose }) => {
  // 위험도 컬러 스타일 지정 함수
    const riskLevelStyle = (level) => {
    return {
      color:
        level === '위험'
          ? '#D0000D'
          : level === '경고'
          ? '#FF0716'
          : level === '주의'
          ? '#FF5F00'
          : '#000',
      fontWeight: 'bold',
     };
    };

    const [actionInProgress, setActionInProgress] = useState([
      { name: '박신영', checker: '김민지', temp: '36.5℃', risk: '위험', status: '조치 중', alert: '조치요망' , createDate: '2025-03-25' },
      { name: '김기민', checker: '한원예', temp: '36.5℃', risk: '경고', status: '조치 중', alert: '조치요망',createDate: '2025-02-25'  },
    ]);

    const [actionCompleted, setActionCompleted] = useState([
      { name: '박신영', checker: '김민지', temp: '36.5℃', risk: '위험', status: '조치 완료', createDate: '2025-01-25' },
      { name: '김기민', checker: '한원예', temp: '36.5℃', risk: '경고', status: '조치 완료' , createDate: '2025-02-26'},
    ]);

    {/*표 정렬*/}
        {/*조치 중*/}
    const [inProgressSortConfig, setInProgressSortConfig] = useState({ key: 'createDate', direction: 'asc' });
        {/*조치 완료*/}
    const [completedSortConfig, setCompletedSortConfig] = useState({ key: 'createDate', direction: 'asc' });

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
              return { key, direction: 'asc' };  {/* 다른 열을 클릭하면 오름차순으로 설정*/}
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
    const sortedInProgressData = sortData(actionInProgress, inProgressSortConfig);
    const sortedCompletedData = sortData(actionCompleted, completedSortConfig);

    {/*조치중 조치완료 표 interaction*/}
    const handleActionStatusChange = (row, fromTable, toTable) => {
        if (fromTable === 'inProgress' && toTable === 'completed') {
          // 조치 중 >> 조치 완료
          setActionInProgress(actionInProgress.filter((item) => item !== row));
          setActionCompleted([...actionCompleted, row]);
        } else if (fromTable === 'completed' && toTable === 'inProgress') {
          // 조치 완료 >> 조치 중
          const updatedRow = { ...row, alert: '조치요망' };
          setActionCompleted(actionCompleted.filter((item) => item !== row));
          setActionInProgress([...actionInProgress, updatedRow]);
        }
    };

    {/*alert 팝업 함수*/}
    const showAlert = (row) => {
      Alert.alert(
        `담당자 ${row.checker}에게 조치 요망 알림을 보냈습니다.`,
        "",
        [{ text: "확인", style: "default" }]
      );
    };
  return (
      <View style={styles.modalContainer}>
          <View style={styles.rowContainer}>
            {/* 왼쪽 열 (조치 중 테이블) */}
            <View style={styles.leftColumn}>
                <Text style={styles.title}>담당 검침원 별 전체 노인 온열질환 현황 (조치 중)</Text>
                    <ScrollView style ={styles.tableWrapper}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <TouchableOpacity onPress={() => handleSort('name','inProgress')} style={styles.touchableCell} >
                                  <Text style={styles.header}>성명</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('checker','inProgress')} style={styles.touchableCell}>
                                    <Text style={styles.header}>담당자</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableCell}>
                                    <Text style={styles.header}>피부온도</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSort('risk','inProgress')} style={styles.touchableCell}>
                                    <Text style={styles.header}>온열위험도</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableCell}>
                                    <Text style={styles.header}>조치 현황</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableCell}>
                                    <Text style={styles.header}>조치 알림</Text>
                                </TouchableOpacity>
                            </View>
                            {sortedInProgressData.map((row, idx) => (
                              <View key={idx} style={styles.tableRow}>
                                <Text style={styles.cell}>{row.name}</Text>
                                <Text style={styles.cell}>{row.checker}</Text>
                                <Text style={styles.cell}>{row.temp}</Text>
                                <Text style={[styles.cell, riskLevelStyle(row.risk)]}>{row.risk}</Text>
                                <TouchableOpacity
                                    style={[styles.cell, styles.button]}
                                    onPress={() => handleActionStatusChange(row, 'inProgress', 'completed')}
                                >
                                    <Text style={styles.inprogressBtn}>조치 중</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cell} onPress={() => showAlert(row)}>
                                    <Text style={styles.alertButton}>{row.alert}</Text> {/*조치요망 버튼!*/}
                                </TouchableOpacity>
                              </View>
                            ))}
                        </View>
                    </ScrollView>

                    {/*조치 완료 테이블 */}
                    <Text style={styles.title}>담당 검침원 별 전체 노인 온열질환 현황 (조치 완료)</Text>
                    <ScrollView style ={styles.tableWrapper}>
                        <View style={styles.table}>
                          <View style={styles.tableRow}>
                            <TouchableOpacity onPress={() => handleSort('name','completed')} style={styles.touchableCell} >
                                <Text style={styles.header}>성명</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('checker','completed')} style={styles.touchableCell}>
                                <Text style={styles.header}>담당자</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableCell}>
                                <Text style={styles.header}>피부온도</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSort('risk','completed')} style={styles.touchableCell}>
                                <Text style={styles.header}>온열위험도</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableCell}>
                                <Text style={styles.header}>조치 현황</Text>
                            </TouchableOpacity>
                          </View>
                          {sortedCompletedData.map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                              <Text style={styles.cell}>{row.name}</Text>
                              <Text style={styles.cell}>{row.checker}</Text>
                              <Text style={styles.cell}>{row.temp}</Text>
                              <Text style={[styles.cell, riskLevelStyle(row.risk)]}>{row.risk}</Text>
                              <TouchableOpacity
                                style={[styles.cell, styles.button]}
                                onPress={() => handleActionStatusChange(row, 'completed', 'inProgress')}
                              >
                                <Text style={styles.completeBtn}>조치완료</Text>
                              </TouchableOpacity>
                            </View>
                          ))}
                        </View>
                    </ScrollView>
            </View>

            {/* 오른쪽 열 (온열질환 위험도와 관련된 나머지 표들) */}
            <View style={styles.rightColumn}>
              <Text style={styles.subTitle}>온열질환 위험도</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.header}>체감 온도</Text>
                  <Text style={styles.header}>피부 온도</Text>
                  <Text style={styles.header}>온열질환 위험도</Text>
                </View>
                {[
                  { body: '33~34.9℃', skin: '37.6~38.3℃', risk: '주의' },
                  { body: '35~37.9℃', skin: '38.3~38.9℃', risk: '경고' },
                  { body: '>38℃', skin: '>40℃', risk: '위험' },
                ].map((row, idx) => (
                  <View key={idx} style={styles.tableRow}>
                    <Text style={styles.cell}>{row.body}</Text>
                    <Text style={styles.cell}>{row.skin}</Text>
                    <Text style={[styles.cell, riskLevelStyle(row.risk)]}>{row.risk}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.notice}>전체 온열질환 위험도 이상자: <Text style={{ fontWeight: 'bold' }}>3</Text></Text>
              <Text style={styles.footnote}>* 온열질환 위험도 주의 이상인 사용자 수입니다.</Text>
            </View>
          </View>
      </View>
    );
  };

const styles = StyleSheet.create({
modalContainer: {
  paddingHorizontal: 18,
  width: '100%',
  maxHeight: '100%',
  top: -80,
},
tableWrapper: {
  height: 255,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 4,
  marginBottom: 12,
  overflow: 'hidden',
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 6,
},
subTitle: {
  fontSize: 15,
  fontWeight: '600',
  marginTop: 15,
  marginBottom: 4,
},
rowContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
leftColumn: {
  flex: 1,
  marginRight: 20,
},
rightColumn: {
  flex: 1,
  right:-0,
},
table: {
  borderColor: '#ccc',
  marginBottom: 10,
},
tableRow: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#ccc',
},
header: {
//  flex: 1,
//  fontWeight: 'bold',
//  padding: 6,
    fontWeight: 'bold',
},
cell: {
  flex: 1,
  padding: 6,
  textAlign: 'center',
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
notice: {
  marginTop: 10,
  fontSize: 14,
},
footnote: {
  fontSize: 12,
  color: '#888',
  marginBottom: 10,
},
touchableCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 6,
},
});

export default HeatIllnessDetailModal;