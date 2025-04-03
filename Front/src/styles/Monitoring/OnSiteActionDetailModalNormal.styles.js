// styles/Monitoring/DashboardPage.styles.js

import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        paddingHorizontal: 18,
        width: '100%',
        maxHeight: '100%',
        top: -80,
    },
    tableWrapper: {
        height: 255,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 12,
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 6,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flex: 1.2,
        marginRight: 20,
    },
    rightColumn: {
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    header: {
        fontWeight: 'bold',
    },
    cell: {
        padding: 6,
        textAlign: 'center',
        fontSize: 12,
    },
    inprogressBtn: {
        backgroundColor: 'rgba(217, 217, 217, 0.4)',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        height: 23,
        width: 55,
    },
    completeBtn: {
        backgroundColor:'rgba(104, 219, 98, 0.5)',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        height: 20,
        width: 60,
    },
    touchableCell: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#eee',
        padding: 6,
    },
    nameCell: {
        width: '13%',
    },
    locationCell: {
        width: '18%',
        fontSize: 10,
    },
    causeCell: {
        width: '15%',
    },
    detectTimeCell: {
        width: '20%',
        fontSize: 10,
    },
    detectTimeCell2: {
        width: '23%',
        fontSize: 10,
    },
    assignTimeCell: {
        width: '20%',
        fontSize: 10,
    },
    statusCell: {
        width: '15%',
        fontSize: 10,
    },
});

export default styles;
