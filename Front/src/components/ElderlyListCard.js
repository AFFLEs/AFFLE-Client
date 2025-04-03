import React from "react";
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/SystemManage/ListCard.styles';

const ElderlyListCard = ({ elderly, selected, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.cardBackground]}>
            <Image source={require('../assets/images/user_profile.png')} style={styles.profileImage} />
            <Text style={styles.name}>
                {elderly.name} <Text style={styles.age}>{elderly.gender} | {elderly.age}세</Text>
            </Text>
            <Text style={styles.info}>{elderly.region}</Text>
            <Text style={styles.info}>최근 방문 일자: {elderly.recentVisit}</Text>
            <Text style={styles.info}>특징: {elderly.feature}</Text>
            <Text style={styles.info}>구분: {elderly.category}</Text>
        </TouchableOpacity>
    );
};

export default ElderlyListCard;
