import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../../../theme";
const InboxPage = ({ navigation }) => {
  const [conversations, setConversations] = useState([
    {
      id: "1",
      tenantName: "John Doe",
      lastMessage: "Hey, about the rent...",
      timestamp: "10:45 AM",
      unread: true,
    },
    {
      id: "2",
      tenantName: "Jane Smith",
      lastMessage: "All set for this month!",
      timestamp: "Yesterday",
      unread: false,
    },
    // ... Add more dummy data as needed
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("MessagesPage")}
          >
            <Text style={styles.chatTitle}>{item.tenantName}</Text>
            <Text style={styles.chatSubtitle}>{item.lastMessage}</Text>
            <Text style={styles.chatTimestamp}>{item.timestamp}</Text>
            {item.unread && <View style={styles.unreadIndicator}></View>}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  chatItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.light,
  },
  chatTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  chatSubtitle: {
    color: theme.colors.grey.medium,
    maxWidth: "70%",
  },
  chatTimestamp: {
    color: theme.colors.grey.medium,
    fontSize: 12,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    marginLeft: 10,
  },
});

export default InboxPage;
