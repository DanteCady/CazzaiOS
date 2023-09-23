import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Button, TextInput, Title, IconButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "../../theme";

const SignUpScreen = ({ navigation }) => {
  // Local state definitions for user sign-up details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to navigate back to the Login screen
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  // Placeholder sign-up function; should be replaced with real sign-up logic
  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  // Handle date change from date picker
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setBirthDate(selectedDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        {/* Page title */}
        <Title style={styles.title}>Sign Up</Title>

        {/* User input fields */}
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />

        {/* Birth date input with a date picker */}
        <View style={styles.dateContainer}>
          <TextInput
            label="Birth Date"
            value={birthDate.toLocaleDateString()}
            style={styles.dateInput}
            editable={false} // This input is non-editable
          />
          {/* Calendar icon that triggers the date picker */}
          <IconButton
            icon="calendar"
            size={24}
            onPress={() => setShowDatePicker(true)}
          />
          {/* Conditional rendering of the date picker */}
          {showDatePicker && (
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {/* Sign Up button */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleSignUp}
            style={styles.signupButton}
            labelStyle={styles.buttonText}
          >
            Sign Up
          </Button>
        </View>

        {/* Link to navigate back to Login screen */}
        <TouchableOpacity onPress={goToLogin} style={styles.backToLogin}>
          <Text style={styles.backToLoginText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles for the SignUpScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  signupContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20, // Added a bit more spacing between title and the form
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary.light,
    paddingHorizontal: 5,
    marginBottom: 15,
    fontSize: 16,
    paddingVertical: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15, // Adjusted from 20 to 15 for consistency
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    borderRadius: 5,
    backgroundColor: theme.colors.primary.dark,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backToLogin: {
    marginTop: 30,
    alignItems: "center",
  },
  backToLoginText: {
    fontSize: 16, // Increased font size for better legibility
    color: "#1976D2",
    textDecorationLine: "underline",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.primary.light,
    paddingHorizontal: 5,
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default SignUpScreen;
