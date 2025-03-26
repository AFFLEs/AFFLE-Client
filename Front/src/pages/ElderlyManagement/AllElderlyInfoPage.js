import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/ElderlyManagement/AllElderlyInfoPage.styles';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';

const dummyData = [
  {
    managerName: '김민기',
    region: '애월읍 애월리',
    elderlyList: Array(8).fill({
      name: '박신영',
      gender: '여성',
      age: 92,
      region: '애월읍 애월리',
      recentVisit: '24.11.30',
    })
  },
  {
    managerName: '김지민',
    region: '애월읍 애월리',
    elderlyList: Array(8).fill({
      name: '박신영',
      gender: '여성',
      age: 92,
      region: '애월읍 애월리',
      recentVisit: '24.11.30',
    })
  },
  {
    managerName: '박영신',
    region: '애월읍 애월리',
    elderlyList: Array(6).fill({
      name: '박신영',
      gender: '여성',
      age: 92,
      region: '애월읍 애월리',
      recentVisit: '24.11.30',
    })
  },
  {
    managerName: '한예원',
    region: '애월읍 애월리',
    elderlyList: Array(8).fill({
      name: '박신영',
      gender: '여성',
      age: 92,
      region: '애월읍 애월리',
      recentVisit: '24.11.30',
    })
  },
];

const AllElderlyInfoPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredData = dummyData.filter(group =>
    group.managerName.includes(searchKeyword)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <View style={styles.titleRow}>
          <Text style={styles.cardTitle}>🗂 담당자별 방문 노인 분담표</Text>
          <SearchInput
            value={searchKeyword}
            onChangeText={setSearchKeyword}
            placeholder="담당자명 입력"
          />
        </View>

        {filteredData.map((group, idx) => (
          <View key={idx} style={styles.groupBlock}>
            <Text style={styles.managerTitle}>{group.managerName} <Text style={styles.managerRegion}>{group.region}</Text></Text>
            <View style={styles.elderlyList}>
              {group.elderlyList.map((elder, i) => (
                <View key={i} style={styles.elderlyCard}>
                  <Text style={styles.elderlyName}>{elder.name} {elder.gender} | {elder.age}세</Text>
                  <Text style={styles.elderlyInfo}>{elder.region}</Text>
                  <Text style={styles.elderlyInfo}>최근 방문 일자: {elder.recentVisit}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

export default AllElderlyInfoPage;
