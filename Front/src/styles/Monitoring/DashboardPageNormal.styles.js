import { StyleSheet, Dimensions } from 'react-native';

const componentStyles = {
    // 날씨
    weatherMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10
    },
    weatherInfoBox: {
        flex: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        borderColor: '#BEBEBE',
        borderWidth: 1
    },
    detailedWeatherContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBEBE'
    },
    detailedInfoRow: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        marginRight: 15,
        borderRadius: 8
    },
    detailedInfoLabel: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    detailedInfoValue: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 35
    },
    separator: {
        width: 1,
        backgroundColor: '#BEBEBE',
        marginHorizontal: 10
    },

    // 공지사항
    noticeHeader: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 1
    },
    noticeHeaderText: {
        flex: 1,
        fontWeight: 'bold'
    },
    noticeRow: {
        flexDirection: 'row',
        paddingVertical: 5
    },

    // 공지사항 모달
    modalContainer: {
        padding: 10
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        top: -75,
        marginBottom: 6
    },
    modalContent: {
        top: -50,
        borderWidth: 1,
        borderColor: '#BEBEBE',
        borderRadius: 5,
        overflow: 'hidden'
    },
    modalRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#BEBEBE'
    },
    modalLabel: {
        backgroundColor: '#F0F0F0',
        width: 100,
        padding: 10
    },
    modalLabelText: {
        fontWeight: 'bold'
    },
    modalValue: {
        flex: 1,
        padding: 10
    },
    modalAuthorValue: {
        width: 100,
        padding: 10,
        borderRightWidth: 1,
        borderColor: '#BEBEBE'
    },
    fileLink: {
        textDecorationLine: 'underline',
        color: 'blue'
    },
    contentContainer: {
        padding: 15,
        minHeight: 430
    },
    contentText: {
        lineHeight: 22
    },

    // 정보
    infoTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    infoValue: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },

    // 현장조치
    fieldStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    fieldStatusBox: {
        backgroundColor: '#FF0716',
        flex: 1,
        padding: 10,
        marginRight: 15,
        borderRadius: 8
    },
    fieldStatusCompleteBox: {
        backgroundColor: '#E8EDE8',
        flex: 1,
        padding: 10,
        borderRadius: 8
    },
    fieldStatusTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    fieldStatusValueContainer: {
        alignItems: 'flex-end'
    },
    fieldStatusValue: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5
    }
};

export default componentStyles;
