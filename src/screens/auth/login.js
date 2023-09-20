import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
// import CheckBox from '@react-native-community/checkbox';
import { Button, TextInput, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import theme from "../../theme";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for showing or hiding password

  const handleLogin = () => {
    // Handle login logic here
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
          secureTextEntry={!showPassword} // Controlled by showPassword state
        />

        <View style={styles.forgotPasswordContainer}>
          {/* <CheckBox value={showPassword} onValueChange={setShowPassword} /> */}
          {/* <Text>Show Password</Text> */}
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
