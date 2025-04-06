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
    tableBodyScroll: {
        maxHeight: 400,
    },
    tableBody: {
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 50
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#eee',
    },
    rowCell: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    assignCell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
