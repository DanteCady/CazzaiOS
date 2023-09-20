import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Text, List } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationBar from "../../../components/composite/Dashboard/landlord/navigationBar";

const LandlordDashboard = ({ navigation }) => {
  // Sample data for the in
  const tenants = [
    { name: "John Doe", rent: 500 },
    { name: "Jane Smith", rent: 550 },
    { name: "Dante Cady", rent: 550 },
    { name: "Omar Santos", rent: 550 },
    { name: "Greg Davis", rent: 550 },
    // ... add more tenants and their rent amounts
  ];

  const upcomingPayments = [
    { tenant: "John Doe", dueDate: "2023-10-01", amount: 500 },
    { tenant: "Jane Smith", dueDate: "2023-10-05", amount: 550 },
    { tenant: "Dante Cady", dueDate: "2023-10-01", amount: 500 },
    { tenant: "Omar Santos", dueDate: "2023-10-05", amount: 550 },
    { tenant: "Greg Davis", dueDate: "2023-10-01", amount: 500 },
    // ... add more upcoming payments data as needed
  ];

  const getDaysRemaining = (dueDate) => {
    const currentDate = new Date();
    const paymentDate = new Date(dueDate);
    const differenceInTime = paymentDate - currentDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const userName = "Cazza User"; // replace with dynamic data, maybe from a state or prop

  // Calculate total rent expected
  const totalRentExpected = tenants.reduce(
    (sum, tenant) => sum + tenant.rent,
    0
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["#43ecf5", "white"]}
          style={styles.gradientContainer}
        >
          <Text style={styles.welcomeText}>Welcome Back, {userName}!</Text>
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.incomeCard} elevation={0}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Total Rent Expected</Title>
              <Text style={styles.incomeAmount}>
                ${totalRentExpected.toFixed(2)}
              </Text>
            </Card.Content>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.boxName}>Tenants</Text>
          <View style={styles.tenantBox}>
            <Card.Content>
              {tenants.slice(0, 5).map((tenant, index) => (
                <View key={index} style={styles.tenantRow}>
                  <Text style={styles.tenantName}>{tenant.name}</Text>
                  <Text style={styles.tenantRent}>
                    ${tenant.rent.toFixed(2)}
                  </Text>
                </View>
              ))}
            </Card.Content>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("AllTenants")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.boxName}>Upcoming Payments</Text>
          <View style={styles.upcomingPaymentsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {upcomingPayments.map((payment, index) => (
                <View key={index} style={styles.paymentTile}>
                  <Text style={styles.paymentTenant}>{payment.tenant}</Text>
                  <Text style={styles.paymentAmount}>
                    ${payment.amount.toFixed(2)}
                  </Text>
                  <Text style={styles.paymentDueDate}>
                    Due: {payment.dueDate}
                  </Text>
                  <Text style={styles.daysRemaining}>
                    {getDaysRemaining(payment.dueDate)} days to go
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("AllPayments")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  content: {
    padding: 15,
    flex: 1, // Ensure content takes full height
  },
  gradientContainer: {
    flex: 1, // This ensures that the gradient takes up the full screen height
  },
  incomeCard: {
    width: "100%", // Ensure the card fills the entire width
    marginBottom: 20,
    shadowOpacity: 0, // removes shadow for iOS
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 200,
    marginTop: -150,
  },
  incomeTitle: {
    fontSize: 18,
    color: "black",
  },
  incomeAmount: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0c51a1",
  },
  incomeDesc: {
    fontSize: 16,
    color: "black",
  },
  tenantBox: {
    width: "100%",
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    color: "black",
  },
  boxName: {
    color: "black",
    marginBottom: 30,
  },
  tenantRow: {
    flexDirection: "row", // make child elements sit side by side
    justifyContent: "space-between", // distribute children across the row
    alignItems: "center", // align children vertically in the center
    borderBottomWidth: 0.5, // add a thin line at the bottom to mimic a table row
    borderBottomColor: "#E0E0E0", // color for the bottom line
    paddingVertical: 10, // add some vertical padding for better look
    color: "black",
  },

  tenantName: {
    fontSize: 18,
    color: "black",
  },

  tenantRent: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0c51a1",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },

  tenantRent: {
    fontSize: 16,
    color: "#333",
  },
  accordion: {
    paddingHorizontal: 10,
  },
  gradientContainer: {
    height: 380,
    width: "100%",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF", // white color for better visibility against gradient
    textAlign: "center",
    marginTop: 150, // adjust this value as needed to position the text
  },
  upcomingPaymentsContainer: {
    width: "100%",
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    color: "black",
  },

  upcomingPaymentsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },

  paymentTile: {
    width: 120, // Reduced from 140
    height: 120, // Reduced from 100
    backgroundColor: "white",
    borderRadius: 8, // Slightly reduced from 10 for a more subtle curve
    marginRight: 12, // Reduced from 15
    padding: 8, // Reduced from 10
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  paymentTenant: {
    fontSize: 14, // Reduced from 16
    fontWeight: "bold",
    color: "black",
  },

  paymentAmount: {
    fontSize: 16, // Reduced from 18
    color: "#0c51a1",
  },

  paymentDueDate: {
    fontSize: 12, // Reduced from 14
    color: "#333",
  },
  daysRemaining: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
  viewAll: {
    color: "#0c51a1",
    textAlign: "right",
    marginTop: 5,
    textDecorationLine: "underline",
  },
});

export default LandlordDashboard;
