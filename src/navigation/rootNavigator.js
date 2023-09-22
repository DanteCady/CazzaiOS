// src/navigation/RootNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/signUp';
import LandlordDashboard from '../screens/users/Landlords/landlordDashboard';
import SideDrawer from '../components/composite/Dashboard/landlord/sideDraw';
import DrawNavigator from './drawNavigator';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandlordDashboard">
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LandlordDashboard" component={LandlordDashboard} options={{ headerShown: false }} />
        {/* Add other screen routes here */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default RootNavigator;
