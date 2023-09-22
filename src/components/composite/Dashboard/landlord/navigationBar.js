import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";
import QuickAddButtons from "./quickAddButtons";

const NavigationBar = ({ navigation, toggleQuickAdd }) => {
  const [showQuickAddButtons, setShowQuickAddButtons] = useState(false);

  const toggleQuickAddButtonsLocal = () => {
    setShowQuickAddButtons(!showQuickAddButtons);
    toggleQuickAdd(); // Call the prop function to toggle Quick Add
  };

  const goToDashboard = () => {
    navigation.navigate("LandlordDashboard");
  };

  const goToNotifications = () => {
    navigation.navigate("Notifications");
  };

  const goToMessages = () => {
    navigation.navigate("Profile");
  };

  const goToReports = () => { // Add this function
    navigation.navigate("Reports");
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
        <TouchableOpacity
          onPress={toggleQuickAddButtonsLocal}
          style={styles.button}
        >
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
        <TouchableOpacity onPress={goToReports} style={styles.button}>
          <Icon name="folder" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Files</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMessages} style={styles.button}>
          <Icon name="message" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Messages</Text>
        </TouchableOpacity>
      </View>
      {showQuickAddButtons && <QuickAddButtons />}
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
    color: "#0c51a1",
    fontWeight: "bold",
  },
});

export default NavigationBar;
