import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native"; // Import Text
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={styles.button}
        >
          <Icon
            name="view-dashboard"
            size={30}
            color={theme.colors.primary.dark}
          />
          <Text style={styles.iconTitle}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={styles.button}
        >
          <Icon name="bell" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddTenantOrProperty")}
          style={styles.button}
        >
          <Icon
            name="plus-circle"
            size={30}
            color={theme.colors.primary.dark}
          />
          <Text style={styles.iconTitle}>Quick Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.button}
        >
          <Icon name="menu" size={30} color={theme.colors.primary.dark} />
          <Text style={styles.iconTitle}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.button}
        >
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
    height: 100, // Increased height slightly to accommodate titles
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center", // Center the icon and title vertically
  },
  iconTitle: {
    fontSize: 12, // Adjust font size to your preference
    marginTop: 5, // Space between the icon and title
    color: theme.colors.primary.dark,
  },
});

export default NavigationBar;
