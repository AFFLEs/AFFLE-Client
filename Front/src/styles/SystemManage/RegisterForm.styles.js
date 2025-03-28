import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    input: {
        backgroundColor: '#F2F2F2',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginVertical: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4369A3',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    genderButton: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    genderButtonSelected: {
        backgroundColor: '#D9E1ED',
    },
    genderButtonText: {
        fontSize: 16,
        color: '#000000',
    },
    genderButtonTextSelected: {
        color: '#000000',
        fontWeight: '600',
    },

});
