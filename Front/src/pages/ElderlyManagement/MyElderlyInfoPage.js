import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/ElderlyManagement/MyElderlyInfoPage.styles';
import Card from '../../components/Card';
import HealthStatusCard from '../../components/HealthStatusCard';
import SearchInput from '../../components/SearchInput';
import SortButton from '../../components/SortButton';

export const originalElderlyData = [
  {
    name: '김기민',
    gender: '남성',
    age: 74,
    recentVisit: '24.10.24',
    nextVisit: '24.12.02',
    phone: '010-1234-1234',
    type: '독거 노인',
    address: '제주특별자치도 제주시 애월읍 곽지11길 27',
    status: [
      { color: 'green', topText: '체온', bottomText: '정상' },
      { color: 'yellow', topText: '심박수', bottomText: '경고' },
      { color: 'green', topText: '위치 착용', bottomText: '완료' }
    ]
  },
  {
    name: '박신영',
    gender: '남성',
    age: 74,
    recentVisit: '24.10.24',
    nextVisit: '24.12.02',
    phone: '010-1234-1234',
    type: '독거 노인',
    address: '제주특별자치도 제주시 애월읍 곽지11길 27',
    status: [
      { color: 'gray', topText: '체온', bottomText: '측정 불가' },
      { color: 'gray', topText: '심박수', bottomText: '측정 불가' },
      { color: 'red', topText: '위치 착용', bottomText: '미완료' }
    ]
  },
  {
    name: '고길동',
    gender: '남성',
    age: 80,
    recentVisit: '24.10.20',
    nextVisit: '24.12.01',
    phone: '010-5555-1111',
    type: '독거 노인',
    address: '제주시 이도이동 123',
    status: [
      { color: 'green', topText: '체온', bottomText: '정상' },
      { color: 'green', topText: '심박수', bottomText: '정상' },
      { color: 'green', topText: '위치 착용', bottomText: '완료' }
    ]
  },
  {
    name: '이순자',
    gender: '여성',
    age: 77,
    recentVisit: '24.10.22',
    nextVisit: '24.12.03',
    phone: '010-9876-5432',
    type: '독거 노인',
    address: '서귀포시 중문동 456',
    status: [
      { color: 'yellow', topText: '체온', bottomText: '주의' },
      { color: 'green', topText: '심박수', bottomText: '정상' },
      { color: 'green', topText: '위치 착용', bottomText: '완료' }
    ]
  }
];

const MyElderlyInfoPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOption, setSortOption] = useState('recentVisit');

  const filteredData = originalElderlyData
    .filter(elder => elder.name.includes(searchKeyword))
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'recentVisit') {
        return b.recentVisit.localeCompare(a.recentVisit);
      } else if (sortOption === 'nextVisit') {
        return b.nextVisit.localeCompare(a.nextVisit);
      }
      return 0;
    });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="👤 내 담당 노인 정보 조회">
        <View style={styles.text}>
          <View style={styles.searchSortRow}>
            <SearchInput
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              placeholder="담당자명 입력"
              itsme='MyInfo'
            />
            <SortButton
              selectedOption={sortOption}
              onSelect={setSortOption}
            />
          </View>
        </View>

        <View style={styles.grid}>
          {filteredData.map((elder, index) => (
            <View key={index} style={styles.personCard}>
              <View style={styles.separator} />
              <View style={styles.nameRow}>
                <Text style={styles.name}>{elder.name}</Text>
                <Text style={styles.age}>{elder.gender} | {elder.age}세</Text>
              </View>
              <Text style={styles.info}>최근 방문 일자 : {elder.recentVisit}    다음 방문 일자 : {elder.nextVisit}</Text>
              <Text style={styles.info}>연락처 : {elder.phone}    구분 : {elder.type}</Text>
              <Text style={styles.info}>주소 : {elder.address}</Text>
              <View style={styles.statusRow}>
                {elder.status.map((s, i) => (
                  <HealthStatusCard
                    key={i}
                    color={s.color}
                    topText={s.topText}
                    bottomText={s.bottomText}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
};

export default MyElderlyInfoPage;