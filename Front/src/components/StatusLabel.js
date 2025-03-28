import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const StatusLabel = ({ status = 0, type = "work" }) => {
    const Status =
        type === "health"
            ? {
                0: { text: "정상", color: "#43A363" },
                1: { text: "경고", color: "#F5BD33" },
                2: { text: "위험", color: "#E55733" },
            }[status]
            : {
                0: { text: "근무 중", color: "#43A363" },
                1: { text: "휴게시간", color: "#F5BD33" },
                2: { text: "퇴근", color: "#E55733" },
            }[status];

    return (
        <View style={styles.container}>
            <View style={[styles.circle, { backgroundColor: Status.color }]} />
            <Text style={styles.labelText}>{Status.text}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    labelText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        lineHeight: 24,
    },
});

export default StatusLabel;
