// ManageAssignmentPage.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    statBox: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchRow: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    picker: {
        flex: 1,
        height: 60,
    },
    searchInput: {
        flex: 6,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 8,
    },
    tableHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f5f5f5',
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#eee',
    },
    // 공통 셀: 수직/수평 모두 중앙 정렬 (기본 한 줄 텍스트)
    rowCell: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 마지막 열: 배정 현황과 수정 버튼을 가로 배치
    assignCell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // 수직으로 중간 정렬, 가로로 좌우 배치
        paddingHorizontal: 8,
    },
    assignText: {
        textAlign: 'left',
        flexWrap: 'nowrap',
    },
    editButton: {
        backgroundColor: '#4369A3',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 3,
        marginLeft: 12,
    },
    editButtonText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 12,
    },
});

export default styles;
