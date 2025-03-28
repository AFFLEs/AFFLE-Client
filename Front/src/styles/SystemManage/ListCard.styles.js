import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        paddingVertical: 10,
        width: '30%',
    },
    cardBackground: {
        backgroundColor: '#E9E9E9',
    },
    profileImage: {
        width: 80,
        height: 80,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    age: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#666',

    },
    info: {
        fontSize: 12,
        color: '#444',
        marginTop: 5,
    },
});

export default styles
