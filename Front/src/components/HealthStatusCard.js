import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/components/StatusCard.styles'

const HealthStatusCard = ({ color = 'gray', topText, bottomText }) => {
    // 배경색
    const backgroundColor = {
        red: '#E55733',
        yellow: '#F5BD33',
        green: '#43A363',
        gray: '#E8EDE8'
    }[color] || '#E8EDE8'; // 기본값 green

    return (
        <View style={[styles.card, { backgroundColor }]}>
            <Text style={styles.topText}>{topText}</Text>
            <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
    );
};

export default HealthStatusCard;
