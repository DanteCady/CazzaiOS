import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { Card, Title, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import NavigationBar from "../../../components/composite/Dashboard/landlord/navigationBar";
import { Calendar } from 'react-native-calendars';
import Swiper from "react-native-swiper";

const LandlordDashboard = ({ navigation }) => {
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

  const totalRentExpected = tenants.reduce(
    (sum, tenant) => sum + tenant.rent,
    0
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#43ecf5", "white"]}
        style={styles.gradientContainer}
      >
        <Text style={styles.welcomeText}>Welcome Back, {userName}!</Text>
      </LinearGradient>
      <ScrollView>
        {/* Financial Summary Swiper */}
       <Swiper style={styles.swiper}>
          {/* Page 1 - Total Expected Rent */}
          <View style={styles.summaryPage}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Total Expected Rent</Title>
              <Text style={styles.incomeAmount}>
                ${totalRentExpected.toFixed(2)}
              </Text>
            </Card.Content>
          </View>
          {/* Page 2 - Metric 2 */}
          <View style={styles.summaryPage}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Total Rent Recieved</Title>
              {/* Add content for Metric 2 */}
            </Card.Content>
          </View>
          {/* Page 3 - Metric 3 */}
          <View style={styles.summaryPage}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Vacancy Rate</Title>
              {/* Add content for Metric 3 */}
            </Card.Content>
          </View>
          {/* Page 4 - Metric 6 */}
          <View style={styles.summaryPage}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Rent Arrears</Title>
              {/* Add content for Metric 6 */}
            </Card.Content>
          </View>
          {/* Page 5 - Metric 10 */}
          <View style={styles.summaryPage}>
            <Card.Content>
              <Title style={styles.incomeTitle}>Projected Income</Title>
              {/* Add content for Metric 10 */}
            </Card.Content>
          </View>
        </Swiper>

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

        {/* Calendar */}
        <View style={styles.content}>
          <Text style={styles.boxName}>Calendar</Text>
          <Calendar
            // Customize calendar appearance and behavior here
          />
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
    flex: 1,
  },
  gradientContainer: {
    height: 200,
  },
  incomeCard: {
    marginBottom: 20,
    shadowOpacity: 0,
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 15,
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
  summaryPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  swiper: {
    height: 250, // Adjust the height as needed
  },
  tenantBox: {
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
  },
  boxName: {
    color: "black",
    marginBottom: 30,
  },
  tenantRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 10,
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
  paymentTile: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 12,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  paymentTenant: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  paymentAmount: {
    fontSize: 16,
    color: "#0c51a1",
  },
  paymentDueDate: {
    fontSize: 12,
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginTop: 100
  },
  upcomingPaymentsContainer: {
    marginTop: -10,
    marginBottom: 20,
    borderRadius: 10,
    // backgroundColor: "white",
    padding: 15,
    height: 170
    
  },
  upcomingPaymentsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
});

export default LandlordDashboard;
