import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/Auth/LoginPage';
// import SignupPage from './src/pages/Auth/SignupPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainDrawerNavigator from './src/navigations/MainDrawerNavigator';
import DashBoardModal from './src/components/DashBoardModal';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={isAuthenticated ? 'Main' : 'Login'}
            screenOptions={{ headerShown: false }}>

          {/* Authentication Screens */}
          <Stack.Screen name="Login" component={LoginPage}/>
          {/*<Stack.Screen name="Signup" component={SignupPage} />*/}

          {/* Main Application Screens */}
          <Stack.Screen name="Main" component={MainDrawerNavigator} />

          {/* OverlayPage for Modal*/}
          <Stack.Screen name="DashBoardModal" component={DashBoardModal} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
