import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import theme from "../../theme";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

 const fetchUserName = async (token) => {
   try {
     const response = await axios.get(
       "http://192.168.1.42:3000/api/users/getUserName",
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );

     if (response.data && response.data.userName) {
       return response.data.userName;
     } else {
       console.error("Unexpected response structure:", response.data);
       return null;
     }
   } catch (error) {
     console.error("Error fetching user name:", error);
     return null;
   }
 };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.42:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        const token = response.data.token;

        // Fetch the user's name after successfully logging in
        const userName = await fetchUserName(token);

        const userType = response.data.userType;

        // Store the JWT token securely
        await SecureStore.setItemAsync("userToken", token);

        if (!userName) {
          Alert.alert("Error", "Failed to fetch the user's name.");
          return;
        }

        if (userType === "landlord") {
          navigation.navigate("LandlordDashboard", { token, userName });
        } else if (userType === "tenant") {
          navigation.navigate("TenantDashboard", { token, userName });
        } else {
          Alert.alert("Login Failed", "Invalid user type.");
        }
      } else {
        Alert.alert("Login Failed", "Invalid credentials. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        Alert.alert(
          "Server Error",
          "An error occurred on the server. Please try again later."
        );
      } else if (error.request) {
        console.error("Network error:", error.request);
        Alert.alert(
          "Network Error",
          "Unable to connect to the server. Please check your network connection."
        );
      } else {
        console.error("Unexpected error:", error);
        Alert.alert(
          "Login Error",
          "An unexpected error occurred while logging in."
        );
      }
    }
  };

  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  const handleBiometric = () => {
    // Handle biometric authentication here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Image
          source={require("../../assets/apple-touch-icon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Cazza!</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry={!showPassword}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>
          <TouchableOpacity>
            <Image
              source={require("../../assets/Face_ID_logo.svg.png")}
              style={styles.faceID}
              onProgress={handleBiometric}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.signUpContainer} onPress={goToSignup}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Version 1.0.0</Text>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Terms of Use</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles for the LoginScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey.light,
    justifyContent: "center",
  },
  loginContainer: {
    marginHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: theme.typography.header.fontSize,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: theme.typography.header.fontWeight,
    color: theme.typography.header.color,
  },
  subtitle: {
    fontSize: theme.typography.subHeader.fontSize,
    textAlign: "center",
    marginBottom: 30,
    color: theme.colors.grey.main,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey.main,
    paddingHorizontal: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    fontSize: theme.typography.body.fontSize,
    paddingVertical: theme.spacing.small,
    height: 35,
  },
  buttonContainer: {
    marginTop: theme.spacing.medium,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  faceID: {
    height: 45,
    width: 45,
    marginLeft: theme.spacing.medium,
  },
  loginButton: {
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.primary.dark,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: theme.spacing.large,
  },
  signUpText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.grey.dark,
  },
  signUpLink: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.primary.main,
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  forgotPasswordLink: {
    color: theme.colors.primary.main,
  },
  footerContainer: {
    marginTop: theme.spacing.large,
    alignItems: "center",
  },
  version: {
    marginTop: theme.spacing.small,
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.grey.dark,
  },
  termsLink: {
    marginTop: theme.spacing.xsmall,
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.primary.main,
    textDecorationLine: "underline",
  },
});
export default LoginScreen;
