import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";

const QuickAddButtons = ({ onAddProperty, onAddTenant }) => {
  return (
    <View style={styles.quickAddContainer}>
      <TouchableOpacity onPress={onAddProperty} style={styles.quickAddButton}>
        <View style={styles.buttonIconContainer}>
          <Icon name="home" size={32} color={theme.colors.primary.dark} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddTenant} style={styles.quickAddButton}>
        <View style={styles.buttonIconContainer}>
          <Icon name="account" size={32} color={theme.colors.primary.dark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickAddContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    top: 60,
    left: 0,
    right: 0,
  },
  quickAddButton: {
    alignItems: "center",
    backgroundColor: theme.colors.primary.dark,
    borderRadius: 30, // For circle look, radius = 0.5 * diameter
    width: 60,
    height: 60,
    marginHorizontal: 15,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuickAddButtons;
