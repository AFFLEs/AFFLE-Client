import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Auth/LoginPage';
import MainDrawerNavigator from './src/navigations/MainDrawerNavigator';
import DashBoardModal from './src/components/DashBoardModal';
import MapScreen from './src/pages/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Main' : 'Login'} screenOptions={{ headerShown: false }}>
        {/* 로그인 관련 화면 */}
        <Stack.Screen name="Login" component={LoginPage} />
        
        {/* 메인 애플리케이션 */}
        <Stack.Screen name="Main" component={MainDrawerNavigator} />

          {/* OverlayPage for Modal*/}
          <Stack.Screen name="DashBoardModal" component={DashBoardModal} />

        <Stack.Screen name="Map" component={MapScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}