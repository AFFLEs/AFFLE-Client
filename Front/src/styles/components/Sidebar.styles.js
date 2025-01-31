import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sidebar: {
        height: '100%',
        backgroundColor: '#4369A3',
        paddingVertical: 20,
    },
    sidebarHeader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#3b5998',
    },
    menuText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    arrow: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    subMenu: {
        backgroundColor: '#48648E'
    },
    subItem: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
    },
    subText: {
        fontSize: 12,
        color: '#FFFFFF',
    },
});

export default styles;
