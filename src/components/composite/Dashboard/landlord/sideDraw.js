import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const SideDrawer = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
        <Text>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
        <Text>Screen 2</Text>
      </TouchableOpacity>
      {/* Add more menu items */}
    </DrawerContentScrollView>
  );
};

export default SideDrawer;
