// styles/Monitoring/DashboardPage.styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    mainWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftCards: {
        flex: 1,
    },
    rightCards: {
        flex: 1,
        gap: 10,
    },
    list: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    listItem: {
        width: 330, // 카드의 넓이를 고정 (필요한 크기로 조정 가능)
        marginRight: 5,
    },
    arrowButton: {
        position: 'absolute',
        top: -38,
        right: 1,
        paddingHorizontal: 10,
    },
    arrowText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default styles;
