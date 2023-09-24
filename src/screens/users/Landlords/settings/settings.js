// Importing necessary libraries and components
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";

// Data structure for landlord settings, organized by category and sub-items
const settingsData = [
  {
    title: "Profile",
    icon: "account",
    subItems: [
      { title: "Edit Profile" },
      { title: "Change Password" },
      { title: "Manage Payment Methods" },
    ],
  },
  {
    title: "Notifications",
    icon: "bell",
    subItems: [
      { title: "Push Notifications" },
      { title: "Email Notifications" },
      { title: "SMS Alerts" },
    ],
  },
  {
    title: "Display & Appearance",
    icon: "monitor",
    subItems: [
      { title: "Theme Settings" },
      { title: "Font Size" },
      { title: "Language & Region" },
    ],
  },
  {
    title: "Privacy & Security",
    icon: "lock",
    subItems: [
      { title: "Privacy Policy" },
      { title: "Two-Factor Authentication" },
      { title: "Delete Account"}
      {title: "Download Data"}
    ],
  },
  {
    title: "User & Property Management",
    icon: "account-multiple",
    subItems: [
      { title: "Manage Tenants" },
      { title: "Property Listings" },
      { title: "Access Permissions" },
    ],
  },
  {
    title: "Feedback & Support",
    icon: "help-circle",
    subItems: [
      { title: "Report a Problem" },
      { title: "Contact Support" },
      { title: "FAQs" },
    ],
  },
  {
    title: "About & Legal",
    icon: "information",
    subItems: [
      { title: "Terms of Service" },
      { title: "License Agreement" },
      { title: "Version Info" },
    ],
  },
];

const LandlordSettingsPage = ({ navigation }) => {
  // State to track the currently selected (expanded) settings category
  const [selectedSetting, setSelectedSetting] = useState(null);

  // Handler to navigate back to the LandlordDashboard
  const handleBack = () => {
    navigation.navigate("LandlordDashboard");
  };

  return (
    <View style={styles.container}>
      {/* Header consisting of a back button, the page title, and a help icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon
            name="arrow-left"
            size={theme.spacing.large}
            color={theme.colors.grey.dark}
          />
        </TouchableOpacity>
        <Text style={theme.typography.header}>Settings</Text>
        <Icon
          name="help-circle"
          size={theme.spacing.medium}
          color={theme.colors.secondary.main}
        />
      </View>

      {/* List of settings categories, expandable to show sub-settings */}
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            {/* Each main setting category has an icon, title, and an arrow indicating expand/collapse state */}
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                setSelectedSetting(
                  selectedSetting === item.title ? null : item.title
                );
              }}
            >
              <Icon
                name={item.icon}
                size={theme.spacing.large}
                color={theme.colors.primary.dark}
              />
              <Text style={[theme.typography.body, styles.listText]}>
                {item.title}
              </Text>
              <Icon
                name={
                  selectedSetting === item.title
                    ? "chevron-down"
                    : "chevron-right"
                }
                size={theme.spacing.large}
                color={theme.colors.grey.dark}
              />
            </TouchableOpacity>

            {/* If a main setting category is selected, its sub-items are rendered below it */}
            {selectedSetting === item.title &&
              item.subItems.map((sub) => (
                <View style={styles.subItem} key={sub.title}>
                  <Text style={[theme.typography.caption, styles.subItemText]}>
                    {sub.title}
                  </Text>
                </View>
              ))}
          </View>
        )}
      />

      {/* Footer displaying the current version of the application */}
      <View style={styles.footer}>
        <Text style={theme.typography.caption}>Version: 1.0.0</Text>
      </View>
    </View>
  );
};

// Styles for this component, leveraging a theme for consistent design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.light,
    top: 30,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.lighter,
    backgroundColor: theme.colors.grey.light,
  },
  listText: {
    flex: 1,
    marginLeft: theme.spacing.medium,
    fontWeight: "bold",
    color: theme.colors.black,
  },
  subItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    marginLeft: theme.spacing.large,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.lighter,
  },
  subItemText: {
    flex: 1,
    marginLeft: theme.spacing.medium,
    color: theme.colors.secondary.main,
  },
  footer: {
    padding: theme.spacing.medium,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});

export default LandlordSettingsPage;
