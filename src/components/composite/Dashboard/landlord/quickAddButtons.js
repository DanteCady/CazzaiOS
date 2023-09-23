import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "../../../../theme";

const QuickAddButtons = ({ onAddProperty, onAddTenant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleButtons = () => {
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const propertyTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -60], // adjust this value to change the distance buttons move
  });

  const tenantTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 60], // adjust this value to change the distance buttons move
  });

  return (
    <View style={styles.quickAddContainer}>
      <Animated.View style={{ transform: [{ translateX: propertyTranslateX }] }}>
        <TouchableOpacity onPress={onAddProperty} style={styles.quickAddButton}>
          <View style={styles.buttonIconContainer}>
            <MaterialIcons name="home" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View style={{ transform: [{ translateX: tenantTranslateX }] }}>
        <TouchableOpacity onPress={onAddTenant} style={styles.quickAddButton}>
          <View style={styles.buttonIconContainer}>
            <MaterialIcons name="person" size={32} color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  quickAddContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
    left: 0,
    right: 145,
  },
  quickAddButton: {
    alignItems: "center",
    backgroundColor: theme.colors.primary.dark,
    borderRadius: 30,
    width: 45,
    height: 45,
    marginHorizontal: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
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
