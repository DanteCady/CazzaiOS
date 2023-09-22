import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";
import QuickAddButtons from "./quickAddButtons";

const NavigationBar = ({ onOpenDrawer, navigation, toggleQuickAdd }) => {
  const [showQuickAddButtons, setShowQuickAddButtons] = useState(false);

  const toggleQuickAddButtons = () => {
    setShowQuickAddButtons(!showQuickAddButtons);
    toggleQuickAdd(); // Call the prop function to toggle Quick Add
  };

  const goToDashboard = () => {
    navigation.navigate("LandlordDashboard");
  };

  const goToQuickAdd = () => {
    toggleQuickAddButtons();
  };

  const goToNotifications = () => {
    navigation.navigate("Notifications");
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const addProperty = () => {
    // Handle adding a property
    toggleQuickAddButtons();
  };

  const addTenant = () => {
    // Handle adding a tenant
    toggleQuickAddButtons();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={goToDashboard} style={styles.button}>
          <Icon
            name="view-dashboard"
            size={30}
            color={theme.colors.primary.dark}
          />
          <Text style={styles.iconTitle}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpenDrawer} style={styles.button}>
          <Icon name="menu" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToQuickAdd} style={styles.button}>
          <Icon
            name="plus-circle"
            size={30}
            color={theme.colors.primary.dark}
          />
          <Text style={styles.iconTitle}>Quick Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNotifications} style={styles.button}>
          <Icon name="bell" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToProfile} style={styles.button}>
          <Icon
            name="account-circle"
            size={30}
            color={theme.colors.primary.dark}
          />
          <Text style={styles.iconTitle}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#E0E0E0",
    height: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
  },
  iconTitle: {
    fontSize: 12,
    marginTop: 5,
    color: theme.colors.primary.dark,
  },
});

export default NavigationBar;
