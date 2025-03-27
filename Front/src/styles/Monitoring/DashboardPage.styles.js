// styles/Monitoring/DashboardPage.styles.js

import { StyleSheet, Dimensions } from 'react-native';

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
    // 오버레이 스타일

    overlayContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: Dimensions.get('window').width * 0.8,
        height: '100%',
        backgroundColor: 'white',
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
        elevation: 5,
        zIndex: 999,
    },
    watchScrollContainer: {
        height: 150,
        marginTop: 10,
    },
    watchScrollContent: {
        paddingBottom: 10,
    },
});

export default styles;
