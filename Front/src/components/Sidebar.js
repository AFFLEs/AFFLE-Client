import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/Sidebar.styles';
import MainMenuData from '../datas/MainMenu';

const Sidebar = ({navigation, isManager}) => {
    const [expanded, setExpanded] = useState(null); // Track the expanded menu index

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleMenuClick = (menu, index) => {
        if (menu.subItems) {
            // 서브 아이템이 있다면 펼치거나 닫기
            toggleExpand(index);
        } else if (menu.routeName) {
            // 서브 아이템이 없으면 바로 해당 페이지로 이동
            navigation.navigate(menu.routeName);
        }
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
                            onPress={() => handleMenuClick(menu, index)}
                        >
                            <Text style={styles.menuText}>{menu.title}</Text>
                            {menu.subItems && (
                                <Text style={styles.arrow}>{expanded === index ? '▼' : '▶'}</Text>
                            )}
                        </TouchableOpacity>

                        {/* Sub Menu Items */}
                        {expanded === index && menu.subItems && (
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
