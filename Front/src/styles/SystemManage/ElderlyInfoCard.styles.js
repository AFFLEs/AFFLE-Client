import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    age: {
        fontSize: 14,
        color: "#666",
        fontWeight: "normal",

    },
    info: {
        fontSize: 14,
        color: "#444",
        marginTop: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    column: {
        flex: 1,
        alignItems: "flex-start",
    },
    statusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginHorizontal : 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    managerCard: {
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    managerName: {
        fontSize: 16,
        fontWeight: "bold",
    },

    divider: {
        borderBottomWidth: 0.5,
        borderColor: "#1C1F23",
        marginVertical: 10,
    },
});

export default styles

