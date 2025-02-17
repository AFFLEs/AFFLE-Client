import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    age: {
        fontSize: 14,
        color: '#666',
        fontWeight: 'normal',
        marginHorizontal: 5, // 성별 | 나이 간격 조정
    },
    info: {
        fontSize: 14,
        color: '#444',
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'flex-start',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    elderlyList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    elderlyCard: {
        backgroundColor: '#DCE3F0',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        width: '45%',
        marginVertical: 5,
    },
    elderlyName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elderlyAge: {
        fontSize: 10,
        color: '#666',
        fontWeight: 'normal',
        marginHorizontal: 5,
    },
    elderlyInfo: {
        fontSize: 12,
        color: '#444',
        marginTop: 5,
    },
    divider: {
        borderBottomWidth: 0.5,
        borderColor: '#1C1F23',
        marginVertical: 10,
    },
});

export default styles;

