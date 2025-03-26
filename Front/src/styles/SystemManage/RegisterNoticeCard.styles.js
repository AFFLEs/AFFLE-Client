import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        marginBottom: 30,
    },
    /* 헤더 */
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pickerWrapper: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    noticeText: {
        fontSize: 14,
        color: '#666',
        marginVertical: 6,
    },

    table: {
        borderWidth: 1,
        borderColor: '#999',
        marginTop: 8,
    },
    tableRow: {
        flexDirection: 'row',
        borderColor: '#999',
        borderBottomWidth: 1,
    },
    leftCell: {
        width: 80,
        backgroundColor: '#E0E7EF',
        borderRightWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    leftCellText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    rightCell: {
        flex: 1,
        padding: 8,
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        textAlignVertical: 'center',
    },
    textarea: {
        minHeight: 80,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        width: '100%',
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },

    fileButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#eee',
        borderRadius: 4,
        marginLeft: 8,
    },

    Button: {
        backgroundColor: '#4369A3',
        borderRadius: 3,
        paddingHorizontal: 10,
        margin: 20,
        height: 30,
        width: 80,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    ButtonText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default styles;
