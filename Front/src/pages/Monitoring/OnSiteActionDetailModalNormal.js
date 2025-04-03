import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/Monitoring/OnSiteActionDetailModalNormal.styles';
const OnSiteActionDetailModalNormal = ({ onClose }) => {
    const [actionInProgress, setActionInProgress] = useState([
        { name: '박정수', checker: '이민수', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.03.16 11:00', assignTime: '2025.03.16 11:05' , status:'조치중',completeTime: '2025.01.12 22:30'},
        { name: '장희영', checker: '최수진', location: '애월읍 하가리', cause: '위험 구역', detectTime: '2025.03.17 14:30', assignTime: '2025.03.17 14:35', status:'조치중' ,completeTime: '2025.01.12 22:30'},
    ]);

    const [actionCompleted, setActionCompleted] = useState([
         { name: '박신영', checker: '김민지', location: '애월읍 고내리', cause: '낙상사고', detectTime: '2025.01.12 23:55',assignTime: '2025.03.16 11:05', completeTime: '2025.01.12 22:30' },
         { name: '김기민', checker: '한원예', location: '애월읍 고내리', cause: '온열질환', detectTime: '2025.02.12 22:05', assignTime: '2025.03.16 11:05', completeTime: '2025.01.12 23:00' },
    ]);

        {/*표 정렬 관련 상태 - 순서대로 조치중 & 조치 완료*/ }
        const [inProgressSortConfig, setInProgressSortConfig] = useState({ key: 'createDate', direction: 'asc' });
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

        {/*조치중 조치완료 표 interaction : 조치 중 >> 조치 완료 && 조치완료 >> 조치 중 */}
        const handleActionStatusChange = (row, fromTable, toTable) => {
            if (fromTable === 'inProgress' && toTable === 'completed') {
              setActionInProgress(actionInProgress.filter((item) => item !== row));
              setActionCompleted([...actionCompleted, row]);
            } else if (fromTable === 'completed' && toTable === 'inProgress') {
              const updatedRow = { ...row, alert: '조치요망' };
              setActionCompleted(actionCompleted.filter((item) => item !== row));
              setActionInProgress([...actionInProgress, updatedRow]);
            }
        };

      return (
          <View style={styles.modalContainer}>
              <View style={styles.rowContainer}>
                {/* 왼쪽 열 (조치 중 테이블) */}
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>현장 조치 담당 노인 및 조치 현황 (조치 중)</Text>
                        <ScrollView style ={styles.tableWrapper}>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <TouchableOpacity onPress={() => handleSort('name','inProgress')} style={[styles.touchableCell,styles.nameCell]} >
                                       <Text style={styles.header}>성명</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('location','inProgress')} style={[styles.touchableCell, styles.locationCell]}>
                                         <Text style={styles.header}>위치</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('cause','inProgress')} style={[styles.touchableCell, styles.causeCell]}>
                                         <Text style={styles.header}>원인</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('detectTime','inProgress')} style={[styles.touchableCell,styles.detectTimeCell]}>
                                         <Text style={styles.header}>위험감지시각</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('assignTime','inProgress')} style={[styles.touchableCell, styles.assignTimeCell]}>
                                         <Text style={styles.header}>담당배정시각</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('assignTime','inProgress')} style={[styles.touchableCell,styles.statusCell]}>
                                         <Text style={styles.header}>상태변경</Text>
                                     </TouchableOpacity>
                                </View>
                                {sortedInProgressData.map((row, idx) => (
                                  <View key={idx} style={styles.tableRow}>
                                    <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
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
                                    <TouchableOpacity
                                        style={[styles.cell, styles.button]}
                                        onPress={() => handleActionStatusChange(row, 'inProgress', 'completed')}
                                    >
                                        <Text style={[styles.inprogressBtn, { fontSize: 12}]}>조치 중</Text>
                                    </TouchableOpacity>
                                  </View>
                                ))}
                            </View>
                        </ScrollView>

                        {/*조치 완료 테이블 */}
                        <Text style={styles.title}>현장 조치 담당 노인 및 조치 현황 (조치 완료)</Text>
                        <ScrollView style ={styles.tableWrapper}>
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <TouchableOpacity onPress={() => handleSort('name','completed')} style={[styles.touchableCell,styles.nameCell]} >
                                       <Text style={styles.header}>성명</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('location','completed')} style={[styles.touchableCell, styles.locationCell]}>
                                         <Text style={styles.header}>위치</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('cause','completed')} style={[styles.touchableCell, styles.causeCell]}>
                                         <Text style={styles.header}>원인</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('detectTime','completed')} style={[styles.touchableCell,styles.detectTimeCell]}>
                                         <Text style={styles.header}>위험감지시각</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('completeTime','completed')} style={[styles.touchableCell, styles.assignTimeCell]}>
                                         <Text style={styles.header}>조치완료시각</Text>
                                     </TouchableOpacity>
                                     <TouchableOpacity onPress={() => handleSort('assignTime','completed')} style={[styles.touchableCell,styles.statusCell]}>
                                         <Text style={styles.header}>상태변경</Text>
                                     </TouchableOpacity>
                                </View>
                                {sortedCompletedData.map((row, idx) => (
                                  <View key={idx} style={styles.tableRow}>
                                    <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
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
                                    <TouchableOpacity
                                        style={[styles.cell, styles.button]}
                                        onPress={() => handleActionStatusChange(row, 'completed', 'inProgress')}
                                    >
                                        <Text style={[styles.completeBtn, { fontSize: 12}]}>조치완료</Text>
                                    </TouchableOpacity>
                                  </View>
                                ))}
                            </View>
                        </ScrollView>
                </View>

                {/* 오른쪽 열 */}
                <View style={styles.rightColumn}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>현황 지도</Text>
                        <Text style={[{ fontSize: 10, marginLeft: 10, marginTop:15}]}>
                            *노인의 이름을 누르면 현황 지도로 위치 파악이 가능합니다.
                        </Text>
                        <View style={{marginBottom:350}}></View>
                    </View>

                    <View style={{ flexDirection: 'row'}}>
                        <Text style={styles.title}>긴급 지원 요청</Text>
                        <Text style={[{ fontSize: 10, marginLeft: 10, marginTop:15}]}>
                            * 담당 노인을 포기하고 다른 검침원에게 지원 요청을 할 수 있습니다.
                        </Text>
                    </View>

                    <View style={styles.tableContainer}>
                        {/* 헤더 */}
                        <View style={styles.tableRow}>
                             <TouchableOpacity onPress={() => handleSort('name','inProgress')} style={[styles.touchableCell,styles.nameCell]} >
                               <Text style={styles.header}>성명</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={() => handleSort('location','inProgress')} style={[styles.touchableCell, styles.locationCell]}>
                                 <Text style={styles.header}>위치</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={() => handleSort('cause','inProgress')} style={[styles.touchableCell, styles.causeCell]}>
                                 <Text style={styles.header}>원인</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={() => handleSort('detectTime','inProgress')} style={[styles.touchableCell,styles.detectTimeCell2]}>
                                 <Text style={styles.header}>위험감지시각</Text>
                             </TouchableOpacity>
                        </View>

                        {/* 조치 중 데이터 렌더링 */}
                        {actionInProgress.map((row, idx) => (
                            <View key={idx} style={styles.tableRow}>
                                <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
                                <Text style={[styles.cell, styles.locationCell]}>{row.location}</Text>
                                <Text style={[styles.cell, styles.causeCell]}>{row.cause}</Text>
                                <Text style={[styles.cell, styles.detectTimeCell2]}>
                                    {row.detectTime.split(' ')[0]}
                                    {'\n'}
                                    {row.detectTime.split(' ')[1]}
                                </Text>
                                {/* 지원 요청 버튼 */}
                                <TouchableOpacity
                                    style={styles.requestButton}
                                    onPress={() => Alert.alert('지원 요청', `${row.name}에 대한 지원을 요청했습니다.`)}
                                >
                                    <Text style={styles.requestButtonText}>지원 요청하기</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

              </View>
          </View>
        );
      };

export default OnSiteActionDetailModalNormal;
