import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LandlordDashboard from "../screens/users/Landlords/landlordDashboard";
const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="LandlordDashboard" component={LandlordDashboard} />
      {/* Add more screens for your sidebar menu */}
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
