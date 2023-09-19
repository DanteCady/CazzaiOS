// src/navigation/RootNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/login'
// import SignupScreen from '../screens/auth/signUp'
// import LandlordDashboard from '../screens/users/Landlords/landlordDashboard';

  ;// ...import other screens...

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="LandlordDashboard" component={LandlordDashboard} options={{ headerShown: false }} /> */}
        {/* Add other screen routes here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
