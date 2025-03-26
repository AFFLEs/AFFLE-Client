import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HeatIllnessDetailModal = ({ onClose }) => {
  // 위험도 컬러 스타일 지정 함수
  const riskLevelStyle = (level) => {
    return {
      color:
        level === '위험'
          ? '#d6336c'
          : level === '경고'
          ? '#f59f00'
          : level === '주의'
          ? '#845ef7'
          : '#000',
      fontWeight: 'bold',
    };
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>닫기</Text>
        </TouchableOpacity>

        <ScrollView>
          <Text style={styles.title}>담당 검침원 별 전체 노인 온열질환 현황 (조치 중)</Text>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.header}>성명</Text>
              <Text style={styles.header}>담당자</Text>
              <Text style={styles.header}>피부온도</Text>
              <Text style={styles.header}>온열위험도</Text>
              <Text style={styles.header}>조치 현황</Text>
              <Text style={styles.header}>조치 알림</Text>
            </View>
            {[
              { name: '박신영', checker: '김민지', temp: '36.5℃', risk: '위험', status: '조치 중', alert: '조치요망' },
              { name: '김기민', checker: '한원예', temp: '36.5℃', risk: '경고', status: '조치 완료', alert: '조치요망' },
              { name: '', checker: '', temp: '', risk: '주의', status: '', alert: '' },
            ].map((row, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.cell}>{row.name}</Text>
                <Text style={styles.cell}>{row.checker}</Text>
                <Text style={styles.cell}>{row.temp}</Text>
                <Text style={[styles.cell, riskLevelStyle(row.risk)]}>{row.risk}</Text>
                <Text style={[styles.cell, row.status === '조치 완료' ? styles.done : styles.inProgress]}>
                  {row.status}
                </Text>
                <Text style={styles.cell}>{row.alert}</Text>
              </View>
            ))}
          </View>

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

          <Text style={styles.title}>담당 검침원 별 전체 노인 온열질환 현황 (조치 완료)</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.header}>성명</Text>
              <Text style={styles.header}>담당자</Text>
              <Text style={styles.header}>피부온도</Text>
              <Text style={styles.header}>온열위험도</Text>
              <Text style={styles.header}>조치 현황</Text>
            </View>
            {[
              { name: '박신영', checker: '김민지', temp: '36.5℃', risk: '위험', status: '' },
              { name: '김기민', checker: '한원예', temp: '36.5℃', risk: '경고', status: '' },
              { name: '', checker: '', temp: '', risk: '주의', status: '' },
            ].map((row, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.cell}>{row.name}</Text>
                <Text style={styles.cell}>{row.checker}</Text>
                <Text style={styles.cell}>{row.temp}</Text>
                <Text style={[styles.cell, riskLevelStyle(row.risk)]}>{row.risk}</Text>
                <Text style={styles.cell}>{row.status}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '95%',
    maxHeight: '90%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeText: {
    color: '#333',
    fontWeight: '600',
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
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    padding: 6,
    textAlign: 'center',
    backgroundColor: '#eee',
  },
  cell: {
    flex: 1,
    padding: 6,
    textAlign: 'center',
  },
  done: {
    backgroundColor: '#b2f2bb',
    borderRadius: 4,
  },
  inProgress: {
    backgroundColor: '#ffe066',
    borderRadius: 4,
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
});

export default HeatIllnessDetailModal;
