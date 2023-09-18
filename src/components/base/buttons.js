import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

const Button = ({ label, onPress, style, textStyle, variant }) => {
  let buttonStyle = [styles.button];
  let buttonText = [styles.buttonText];

  // Adjust button style based on the variant prop
  switch (variant) {
    case 'primary':
      buttonStyle.push(styles.primaryButton);
      buttonText.push(styles.primaryButtonText);
      break;
    case 'secondary':
      buttonStyle.push(styles.secondaryButton);
      buttonText.push(styles.secondaryButtonText);
      break;
    case 'home':
      buttonStyle.push(styles.homeButton);
      buttonText.push(styles.homeButtonText);
      break;
    // ... add more variants as required
    default:
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[...buttonStyle, style]}>
      <Text style={[...buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.small,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.typography.body.fontSize,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary.main,
  },
  primaryButtonText: {
    color: theme.colors.white,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary.main,
  },
  secondaryButtonText: {
    color: theme.colors.white,
  },
  homeButton: {
    backgroundColor: theme.colors.tertiary.main,
  },
  homeButtonText: {
    color: theme.colors.white,
  },
  // ... add more button styles as required
});

export default buttons;


//Example


{/* <Button label="Home" variant="home" onPress={() => navigateToHome()} />
<Button label="Login" variant="primary" onPress={() => login()} /> */}