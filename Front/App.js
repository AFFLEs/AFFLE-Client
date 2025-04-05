import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Auth/LoginPage';
import MainDrawerNavigator from './src/navigations/MainDrawerNavigator';
import DashBoardModal from './src/components/DashBoardModal';
import MapScreen from './src/pages/MapScreen';
import { RouterProvider, useRouter } from './src/components/RouterContext';

const Stack = createNativeStackNavigator();

// 중첩 네비게이터에서도 현재 라우트 추출하는 함수
function getActiveRouteName(state) {
  if (!state || !state.routes || state.index == null) return '';
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
}

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setCurrentRoute } = useRouter(); // 현재 라우트 이름을 저장하는 함수

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const route = getActiveRouteName(state);
        setCurrentRoute(route);
      }}
    >
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Main' : 'Login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={MainDrawerNavigator} />
        <Stack.Screen name="DashBoardModal" component={DashBoardModal} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}