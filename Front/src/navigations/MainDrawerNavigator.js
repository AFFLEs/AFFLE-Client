import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardPage from '../pages/Monitoring/DashboardPage';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SOSCallPage from "../pages/Monitoring/SOSCallPage";
import EnterDangerZone from "../pages/Monitoring/EnterDangerZone";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {

    const DUMMY_USER_INFO = {
        name: '한예원',
        location: '애월읍 애월리 지점',
        isManager: false,
    };

    return (
        <Drawer.Navigator
            screenOptions={{
                swipeEnabled: false,
                drawerType: 'permanent',
                drawerStyle: { width: 250 },
                header: () => <Header {...DUMMY_USER_INFO} />,
            }}
            drawerContent={(props) => <Sidebar {...props} isManager={DUMMY_USER_INFO.isManager} />} // 커스텀 사이드바 추가
        >
            <Drawer.Screen name="Dashboard" component={DashBoardPage} />
            <Drawer.Screen name="SOSCall" component={SOSCallPage} />
            
            {/* 위험 구역 출입 관리(EnterDangerZone) 추가 */}
            <Drawer.Screen name="EnterDangerZone" component={EnterDangerZone} />
        </Drawer.Navigator>
    );
}
