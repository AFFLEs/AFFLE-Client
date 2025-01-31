import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/Sidebar.styles';
import MainMenuData from '../datas/MainMenu';


const Sidebar = ({navigation, isManager}) => {
    const [expanded, setExpanded] = useState(null); // Track the expanded menu index

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleSubItemClick = (routeName) => {
        navigation.navigate(routeName);
    };

    const filteredMenuData =
        isManager ? MainMenuData
        : MainMenuData.filter(menu => menu.title !== '검침원 관리');

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                {filteredMenuData.map((menu, index) => (
                    <View key={index}>
                        {/* Main Menu Item */}
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => toggleExpand(index)}
                        >
                            <Text style={styles.menuText}>{menu.title}</Text>
                            <Text style={styles.arrow}>{expanded === index ? '▼' : '▶'}</Text>
                        </TouchableOpacity>

                        {/* Sub Menu Items */}
                        {expanded === index && (
                            <View style={styles.subMenu}>
                                {menu.subItems.map((subItem, subIndex) => (
                                    <TouchableOpacity
                                        key={subIndex}
                                        style={styles.subItem}
                                        onPress={() => handleSubItemClick(subItem.routeName)}
                                    >
                                        <Text style={styles.subText}>{subItem.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Sidebar;
