import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "../../../../theme";

const QuickAddButtons = ({ onAddProperty, onAddTenant }) => {
  return (
    <View style={styles.quickAddContainer}>
      <TouchableOpacity onPress={onAddProperty} style={styles.quickAddButton}>
        <View style={styles.buttonIconContainer}>
          <MaterialIcons name="home" size={32} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddTenant} style={styles.quickAddButton}>
        <View style={styles.buttonIconContainer}>
          <MaterialIcons name="person" size={32} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickAddContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 100, // This ensures the container is positioned 60 units from the bottom.
    left: 0,
    right: 0,
  },
  quickAddButton: {
    alignItems: "center",
    backgroundColor: theme.colors.primary.dark,
    borderRadius: 30,
    width: 60,
    height: 60,
    marginHorizontal: 5,
    elevation: 5,
    shadowColor: "#000",
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
