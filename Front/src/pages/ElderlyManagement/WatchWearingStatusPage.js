import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles/ElderlyManagement/WatchWearingStatusPage.styles';
import SearchInput from '../../components/SearchInput';
import Card from '../../components/Card';

const dummyData = [
  { name: '박신영', gender: '여성', age: 92, status: '미착용', lastWorn: '3일 전' },
  { name: '김기민', gender: '남성', age: 74, status: '충전중', lastWorn: '오늘' },
  { name: '고길동', gender: '남성', age: 80, status: '착용', lastWorn: '오늘' },
  { name: '이순자', gender: '여성', age: 77, status: '충전중', lastWorn: '1일 전' },
  { name: '박영신', gender: '여성', age: 92, status: '착용', lastWorn: '오늘' },
];

const WatchWearingStatus = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('미착용');

  const filteredList = dummyData.filter(elder =>
    elder.name.includes(searchKeyword) && elder.status === selectedStatus
  );

  const getStatusCount = (type) =>
    dummyData.filter(elder => elder.status === type).length;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Card title="⌚ 위치 착용 현황 및 관리">
          <SearchInput
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="검색어 입력"
            style={styles.searchInputTop}
            itsme="Allinfo"
          />

        <View style={styles.grid}>
        <View style={styles.statusTabs}>
                  <TouchableOpacity
                    style={[styles.tab, styles.red, selectedStatus === '미착용' && styles.selected]}
                    onPress={() => setSelectedStatus('미착용')}
                  >
                    <Text style={styles.tabText}>미착용</Text>
                    <Text style={styles.tabCount}>{getStatusCount('미착용')}명</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.tab, styles.yellow, selectedStatus === '충전중' && styles.selected]}
                    onPress={() => setSelectedStatus('충전중')}
                  >
                    <Text style={styles.tabText}>충전 중</Text>
                    <Text style={styles.tabCount}>{getStatusCount('충전중')}명</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.tab, styles.green, selectedStatus === '착용' && styles.selected]}
                    onPress={() => setSelectedStatus('착용')}
                  >
                    <Text style={styles.tabText}>착용</Text>
                    <Text style={styles.tabCount}>{getStatusCount('착용')}명</Text>
                  </TouchableOpacity>
                </View>

                {selectedStatus === '미착용' && (
                  <View style={styles.alertButtonWrapper}>
                    <TouchableOpacity style={styles.alertButtonGlobal}>
                      <Text style={styles.alertButtonText}>착용 권장 알림 전송</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <View style={styles.elderlyListGrid}>
                  {filteredList.map((elder, idx) => (
                    <View key={idx} style={styles.elderCard}>
                      <Text style={styles.elderName}>{elder.name}</Text>
                      <Text style={styles.elderSub}>{elder.gender} | {elder.age}세</Text>
                      <Text style={styles.elderDetail}>마지막 착용 일자 : {elder.lastWorn}</Text>
                    </View>
                  ))}
                </View>
        </View>


      </Card>
    </ScrollView>
  );
};

export default WatchWearingStatus;