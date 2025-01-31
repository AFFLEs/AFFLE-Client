import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    userInfo: {
        marginRight: 10,
        fontSize: 16,
    },
    logout: {
        fontSize: 14,
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
});

export default styles;
