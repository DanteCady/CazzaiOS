import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import theme from '../../theme';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <Input 
        placeholder='Username' 
        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.gray }}
        containerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        onChangeText={text => setUsername(text)} 
      />
      <Input 
        placeholder='Password' 
        leftIcon={{ type: 'font-awesome', name: 'lock', color: theme.colors.gray }} 
        containerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        secureTextEntry 
        onChangeText={text => setPassword(text)} 
      />
      
      <Button 
        title="Login" 
        buttonStyle={styles.loginButton}
        onPress={() => {/* Firebase login code here */}} 
      />

      <View style={styles.socialLogin}>
        <Button 
          icon={<Icon name="google" type="font-awesome" color={theme.colors.white} />} 
          buttonStyle={styles.googleButton}
          onPress={() => {/* Firebase Google sign-in code here */}} 
        />
        <Button 
          icon={<Icon name="windows" type="font-awesome" color={theme.colors.white} />} 
          buttonStyle={styles.microsoftButton}
          onPress={() => {/* Firebase Microsoft sign-in code here */}} 
        />
      </View>

      <TouchableOpacity 
        onPress={() => {/* Biometric sign-in code here */}} 
        style={styles.biometricTouch}
      >
        <Icon name="face" type="material" color={theme.colors.primary.main} size={30} />
      </TouchableOpacity>

      <Text style={styles.signupText}>Don't have an account?</Text>
      <Button 
        title="Sign Up" 
        type="clear" 
        titleStyle={styles.signupButtonText}
        onPress={() => navigation.navigate('SignUpScreen')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  inputContainer: {
    marginBottom: theme.spacing.medium,
  },
  inputText: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: theme.colors.primary.main,
    paddingVertical: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.medium,
  },
  googleButton: {
    backgroundColor: '#DB4437',
    flex: 1,
    marginRight: theme.spacing.small,
  },
  microsoftButton: {
    backgroundColor: '#00A4EF',
    flex: 1,
    marginLeft: theme.spacing.small,
  },
  biometricTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.medium,
  },
  signupText: {
    textAlign: 'center',
    marginBottom: theme.spacing.small,
  },
  signupButtonText: {
    color: theme.colors.primary.main,
    fontSize: 16,
  }
});

export default LoginScreen;
