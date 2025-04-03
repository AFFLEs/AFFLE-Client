import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardPage from '../pages/Monitoring/DashboardPage';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SOSCallPage from "../pages/Monitoring/SOSCallPage";
import FallOccurrence from "../pages/Monitoring/FallOccurrence";
import EnterDangerZone from "../pages/Monitoring/EnterDangerZone";
import HeatExhaustionOccurence from "../pages/Monitoring/HeatExhaustionOccurence";
import MeterReaderListPage from "../pages/SystemManage/MeterReaderListPage";
import ElderlyListPage from "../pages/SystemManage/ElderlyListPage";
import ManageAssignmentPage from "../pages/SystemManage/ManageAssignmentPage";
import NoticeManagePage from "../pages/SystemManage/NoticeManagePage";
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

            {/* 낙상 발생 현황 및 조치 */}
            <Drawer.Screen name="FallOccurrence" component={FallOccurrence} />

            {/* 위험 구역 출입 관리 */}
            <Drawer.Screen name="EnterDangerZone" component={EnterDangerZone} />

            {/* 온열 발생 현황 및 조치 */}
            <Drawer.Screen name="HeatExhaustionOccurence" component={HeatExhaustionOccurence} />

            {/* 시스템 관리 */}
            <Drawer.Screen name="MeterReaderList" component={MeterReaderListPage} />
            <Drawer.Screen name="ElderlyList" component={ElderlyListPage} />
            <Drawer.Screen name="ManageAssignment" component={ManageAssignmentPage} />
            <Drawer.Screen name="NoticeManage" component={NoticeManagePage} />



            <Drawer.Screen name="MyElderlyInfo" component={MyElderlyInfoPage} />
            <Drawer.Screen name="AllElderlyInfo" component={AllElderlyInfoPage} />
            <Drawer.Screen name="WatchWearingStatus" component={WatchWearingStatusPage} />
        </Drawer.Navigator>
    );
}
