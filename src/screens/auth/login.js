import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Button, TextInput, Title } from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing or hiding password

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignUp = () => {
    // Handle sign up logic or navigation here
  };

  const handleBiometric = () => {
    // Handle biometric authentication here
  };

 
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
            <Image source={require('../../assets/apple-touch-icon.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome</Text>
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
              <CheckBox value={showPassword} onValueChange={setShowPassword} />
              <Text>Show Password</Text>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <Button mode="contained" onPress={handleLogin} style={styles.loginButton} labelStyle={styles.buttonText}>
                Login
            </Button>

            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
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
    backgroundColor: '#F5F5F5', // A neutral background color
  },
  loginContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    borderBottomWidth: 1,  // Gives a subtle underline
    borderBottomColor: '#DDD',
    paddingHorizontal: 5,
    marginBottom: 20,
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    borderRadius: 30,
    backgroundColor: '#0c51a1',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 16,
    color: '#555',
  },
  signUpLink: {
    fontSize: 16,
    color: '#1976D2',
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  forgotPasswordLink: {
    color: '#1976D2',
  },

  footerContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  version: {
    marginTop: 10,
    fontSize: 12,
    color: '#555',
  },

  termsLink: {
    marginTop: 5,
    fontSize: 12,
    color: '#1976D2',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
