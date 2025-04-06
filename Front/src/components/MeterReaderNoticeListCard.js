import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MeterReaderNoticeListCard = ({ notices, onSelectNotice }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.row}
            activeOpacity={0.7}
            onPress={() => onSelectNotice(item)}
        >
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
            </Text>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={[styles.headerText, { flex: 0.5 }]}>연번</Text>
            <Text style={[styles.headerText, { flex: 2 }]}>내용</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>작성자</Text>
            <Text style={[styles.headerText, { flex: 1.5 }]}>등록 일시</Text>
        </View>
    );

    return (
        <View style={{ maxHeight: 500 }}>
            {/* 헤더를 FlatList 바깥에서 고정 */}
            <View style={styles.header}>
                <Text style={[styles.headerText, { flex: 0.5 }]}>연번</Text>
                <Text style={[styles.headerText, { flex: 2 }]}>내용</Text>
                <Text style={[styles.headerText, { flex: 1 }]}>작성자</Text>
                <Text style={[styles.headerText, { flex: 1.5 }]}>등록 일시</Text>
            </View>

            {/* FlatList는 그 아래만 스크롤 */}
            <FlatList
                data={notices}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ maxHeight: 460 }} // header 제외한 영역
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 9,
        backgroundColor: '#ddd',
        borderBottomWidth: 1,
        borderColor: '#bbb',
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        maxHeight: 500,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    id: {
        flex: 0.5,
        textAlign: 'center',
    },
    content: {
        flex: 2,
        color: '#333',
    },
    author: {
        flex: 1,
        textAlign: 'center',
    },
    date: {
        flex: 1.5,
        textAlign: 'center',
        color: '#666',
    },
});

export default MeterReaderNoticeListCard;
