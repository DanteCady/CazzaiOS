import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { Button, TextInput, Title, IconButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "../../theme";
import axios from "axios";
import * as LocalAuthentication from "expo-local-authentication";
import { RadioButton } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  // Local state definitions for user sign-up details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userType, setUserType] = useState("");
  
  // Function to navigate back to the Login screen
  const goToLogin = () => {
    navigation.navigate("Login");
  };

 const handleSignUp = async () => {
   try {
     // API call
     const response = await axios.post(
       "http://192.168.17.1:3000/api/users/signup",
       {
         firstName,
         lastName,
         email,
         password,
         phone,
         birthDate: birthDate.toISOString(),
         userType,
       }
     );

     if (response.data.success) {
       const authTypes =
         await LocalAuthentication.supportedAuthenticationTypesAsync();
       let supportsFaceID = authTypes.includes(
         LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
       );
       let supportsTouchID = authTypes.includes(
         LocalAuthentication.AuthenticationType.FINGERPRINT
       );

       let authMessage = "";
       if (supportsFaceID) {
         authMessage = "Would you like to use FaceID to log in?";
       } else if (supportsTouchID) {
         authMessage = "Would you like to use TouchID to log in?";
       }

       if (authMessage) {
         Alert.alert(
           "Authentication Setup",
           authMessage,
           [
             {
               text: "No",
               onPress: () =>
                 console.log("User declined biometric authentication setup."),
               style: "cancel",
             },
             {
               text: "Yes",
               onPress: async () => {
                 // Here, you can store the user's choice for biometric login.
                 // For instance, save the preference in AsyncStorage or your backend.
                 const authResult =
                   await LocalAuthentication.authenticateAsync();
                 if (!authResult.success) {
                   console.error(
                     "Biometric authentication setup failed:",
                     authResult.error
                   );
                   Alert.alert(
                     "Error",
                     "Biometric authentication setup failed. Please try again."
                   );
                 } else {
                   // Biometric setup succeeded
                   Alert.alert("Success", "Sign-up completed!");
                 }
               },
             },
           ],
           { cancelable: false }
         );
       } else {
         // Biometric authentication is not available
         Alert.alert("Success", "Sign-up completed!");
       }
     } else {
       // Sign-up failed
       console.error("Sign-up failed:", response.data.message);
       Alert.alert(
         "Error",
         "Sign-up failed. Please check your information and try again."
       );
     }
   } catch (error) {
     console.error("An unexpected error occurred:", error);
     Alert.alert(
       "Error",
       "An unexpected error occurred. Please try again later."
     );
   }
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
        {/* User type radio buttons */}
        <View style={styles.toggleContainer}>
          <RadioButton.Group
            onValueChange={(value) => setUserType(value)}
            value={userType || null} // Use null as the initial value
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="tenant"
                status={userType === "tenant" ? "checked" : "unchecked"}
                onValueChange={() => setUserType("tenant")}
                color={theme.colors.primary.main}
                backgroundColor={theme.colors.primary.dark}
              />
              <Text style={{ marginRight: 20 }}>Tenant</Text>

              <RadioButton
                value="landlord"
                status={userType === "landlord" ? "checked" : "unchecked"}
                onValueChange={() => setUserType("landlord")}
                color={theme.colors.primary.main}
                backgroundColor={theme.colors.primary.dark}
              />
              <Text>Landlord</Text>
            </View>
          </RadioButton.Group>
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
