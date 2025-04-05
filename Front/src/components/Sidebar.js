import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/components/Sidebar.styles';
import MainMenuData from '../datas/MainMenu';
import { useRouter } from '../components/RouterContext';

const Sidebar = ({ navigation, isManager }) => {
  const [expanded, setExpanded] = useState(null);
  const { currentRoute } = useRouter();

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMenuClick = (menu, index) => {
    if (menu.subItems) {
      toggleExpand(index);
    } else if (menu.routeName) {
      setExpanded(null);
      navigation.navigate(menu.routeName);
    }
  };

  const handleSubItemClick = (routeName) => {
    navigation.navigate(routeName);
  };

  const filteredMenuData = isManager
    ? MainMenuData
    : MainMenuData.filter(menu => menu.title !== '검침원 관리');

  const isMenuSelected = (menu) => {
    if (!menu.subItems) return currentRoute === menu.routeName;
    return menu.subItems.some(sub => sub.routeName === currentRoute);
  };

  return (
    <View style={styles.sidebar}>
      {filteredMenuData.map((menu, index) => (
        <View key={index}>
          // 메인 메뉴
        <TouchableOpacity
          style={[
            styles.menuItem,
            isMenuSelected(menu) && styles.selectedMenuItem,
          ]}
          onPress={() => handleMenuClick(menu, index)}
        >
          <Text
            style={[
              styles.menuText,
              isMenuSelected(menu) && styles.selectedMenuText,
            ]}
          >
            {menu.title}
          </Text>
          {menu.subItems && (
            <Text style={styles.arrow}>{expanded === index ? '▼' : '▶'}</Text>
          )}
        </TouchableOpacity>

          // 서브 메뉴
          {expanded === index && menu.subItems && (
            <View style={styles.subMenu}>
              {menu.subItems.map((subItem, subIndex) => (
                <TouchableOpacity
                  key={subIndex}
                  style={styles.subItem}
                  onPress={() => handleSubItemClick(subItem.routeName)}
                >
                  <Text
                    style={[
                      styles.subText,
                      currentRoute === subItem.routeName && styles.selectedSubText,
                    ]}
                  >
                    {subItem.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Sidebar;
