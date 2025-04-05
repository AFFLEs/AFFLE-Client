import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ title, children, onPress }) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {onPress && (
                    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
                        <Text style={styles.icon}>{'>'}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
         overflow: 'visible',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'column',
    },
    iconButton: {
        padding: 5,
    },
    icon: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
});
