import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardPage from '../pages/Monitoring/DashboardPage';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SOSCallPage from "../pages/Monitoring/SOSCallPage";
import MeterReaderListPage from "../pages/SystemManage/MeterReaderListPage";
import ElderlyListPage from "../pages/SystemManage/ElderlyListPage";
// 노인 관리
import MyElderlyInfoPage from "../pages/ElderlyManagement/MyElderlyInfoPage";
import AllElderlyInfoPage from "../pages/ElderlyManagement/AllElderlyInfoPage";
import WatchWearingStatusPage from "../pages/ElderlyManagement/WatchWearingStatusPage";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {

    const DUMMY_USER_INFO = {
        name: '한예원',
        location: '애월읍 애월리',
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

            <Drawer.Screen name="MeterReaderList" component={MeterReaderListPage} />
            <Drawer.Screen name="ElderlyList" component={ElderlyListPage} />

            <Drawer.Screen name="MyElderlyInfo" component={MyElderlyInfoPage} />
            <Drawer.Screen name="AllElderlyInfo" component={AllElderlyInfoPage} />
            <Drawer.Screen name="WatchWearingStatus" component={WatchWearingStatusPage} />
        </Drawer.Navigator>
    );
}
