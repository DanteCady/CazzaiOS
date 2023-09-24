// src/navigation/RootNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/signUp';
import LandlordDashboard from '../screens/users/Landlords/landlordDashboard';
import LandlordSettingsPage from "../screens/users/Landlords/settings/settings";
import NotificationPage from '../screens/users/Landlords/notifications';
import FilesPage from '../screens/users/Landlords/files';
import InboxPage from '../screens/users/Landlords/inbox';
import MessagesPage from '../screens/users/Landlords/messages';
import {StatusBar} from 'react-native';
import TenantDashboard from '../screens/users/Tenants/tenantDashboard';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="LandlordSettingsPage" options={{ presentation: 'modal' }}>
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LandlordSettingsPage" component={LandlordSettingsPage} options={{ headerShown: false }} />
        <Stack.Screen name="LandlordDashboard" component={LandlordDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={NotificationPage} options={{ headerShown: false }} />
        <Stack.Screen name="Files" component={FilesPage} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={InboxPage} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={MessagesPage} options={{ headerShown: false }} />
        <Stack.Screen name="TenantDashboard" component={TenantDashboard} options={{ headerShown: false }} />
        {/* Add other screen routes here */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default RootNavigator;
