import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    leftCards: {
        flex: 1,
    },
    rightCards: {
        flex: 1,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 10,
    },
    Button: {
        backgroundColor: '#4369A3',
        borderRadius: 3,
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 30,
        width: 80,
    },
    ButtonText: {
        color: "#FFF",
        fontSize: 14,
        textAlign: "center",
        justifyContent: "center",
    },
});

export default styles
