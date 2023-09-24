import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../../theme";
import BankAccountModal from "../../../../components/composite/Payments/landlord/bankAccountModal";

// Function to format a number with asterisks, leaving the last 4 digits visible
const formatNumberWithAsterisks = (number) => {
  if (!number) return "";

  const visibleLength = 4;
  const visiblePart = number.slice(-visibleLength);

  return `************${visiblePart}`;
};

const PaymentMethodsPage = ({ navigation }) => {
  const [isAddingBankAccount, setIsAddingBankAccount] = useState(false);
  const [bankAccounts, setBankAccounts] = useState([]);

  const handleOpenModal = () => {
    setIsAddingBankAccount(true);
  };

  const handleCloseModal = () => {
    setIsAddingBankAccount(false);
  };

const addBankAccountManually = (accountNumber, routingNumber) => {
  const formattedAccountNumber = formatNumberWithAsterisks(accountNumber);
  const formattedRoutingNumber = formatNumberWithAsterisks(routingNumber);

  console.log("Account Number:", formattedAccountNumber);
  console.log("Routing Number:", formattedRoutingNumber);

  const newBankAccount = {
    accountNumber: formattedAccountNumber,
    routingNumber: formattedRoutingNumber,
  };

  setBankAccounts([...bankAccounts, newBankAccount]);

  handleCloseModal();
};

    const handleBack = () => {
        navigation.navigate("LandlordSettingsPage");
    };
    
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon
            name="arrow-left"
            size={theme.spacing.large}
            color={theme.colors.grey.dark}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Bank Account</Text>
      </View>

      {/* Button to open the modal */}
      <TouchableOpacity style={styles.addButton} onPress={handleOpenModal}>
        <Text style={[theme.typography.body, styles.addButtonLabel]}>
          + Add Bank Account
        </Text>
        <Icon
          name="plus-circle"
          size={theme.spacing.medium}
          color={theme.colors.primary.dark}
        />
      </TouchableOpacity>

      {/* List of Bank Accounts */}
      <FlatList
        data={bankAccounts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bankAccountItem}>
            <Text style={theme.typography.body}>
              Account Number: {formatNumberWithAsterisks(item.accountNumber)}
            </Text>
            <Text style={theme.typography.body}>
              Routing Number: {formatNumberWithAsterisks(item.routingNumber)}
            </Text>
          </View>
        )}
      />

      {/* Bank Account Modal */}
      <BankAccountModal
        visible={isAddingBankAccount}
        onClose={handleCloseModal}
        onManualAdd={addBankAccountManually}
        onPlaidAdd={() => {
          // Handle Plaid bank account addition here
          // You can initiate the Plaid flow to link the account
          handleCloseModal();
        }}
      />
    </View>
  );
};

// Styles for this component, leveraging a theme for consistent design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.large,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.light,
    position: "relative", // To allow absolute positioning
    top: 30,
  },
  backButton: {
    position: "absolute", // Position the back button absolutely
    left: 10, // Adjust the left position as needed
  },
  headerText: {
    flex: 1, // Allow the text to take the remaining space
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", // Center the text horizontally
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.lighter,
    backgroundColor: theme.colors.grey.light,
  },
  addButtonLabel: {
    flex: 1,
    marginLeft: theme.spacing.medium,
    fontWeight: "bold",
    color: theme.colors.black,
  },
  bankAccountItem: {
    padding: theme.spacing.medium,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.lighter,
  },
});

export default PaymentMethodsPage;
