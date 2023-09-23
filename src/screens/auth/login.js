import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import theme from "../../theme";

const LoginScreen = ({ navigation }) => {
  // Initialize states for email, password, and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Logic for user login; should be replaced with authentication logic
  const handleLogin = () => {
    // Handle login logic here
  };

  // Navigate to the Signup screen
  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  // Logic for biometric authentication; to be implemented
  const handleBiometric = () => {
    // Handle biometric authentication here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        {/* App logo */}
        <Image
          source={require("../../assets/apple-touch-icon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Cazza!</Text>

        {/* Email input */}
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password input */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry={!showPassword}
        />

        {/* Section for 'Forgot Password' link */}
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login button and biometric (FaceID) authentication */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>

          {/* Biometric authentication */}
          <TouchableOpacity>
            <Image
              source={require("../../assets/Face_ID_logo.svg.png")}
              style={styles.faceID}
              onProgress={handleBiometric}
            />
          </TouchableOpacity>
        </View>

        {/* Footer: Contains Sign Up link, version, and other terms */}
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
