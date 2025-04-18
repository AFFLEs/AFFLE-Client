import React from "react";
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/SystemManage/ListCard.styles';
import StatusLabel from './StatusLabel';

const MeterReaderListCard = ({ manager, selected, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.cardBackground]}>
            <Image source={require('../assets/images/user_profile.png')} style={styles.profileImage} />
            <Text style={styles.name}>{manager.name}</Text>
            <StatusLabel style={styles.info} status={manager.status} />
            <Text style={styles.info}>{manager.work_region}</Text>
            <Text style={styles.info}>{manager.contact}</Text>
        </TouchableOpacity>
    );
};

export default MeterReaderListCard;
