import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../../../theme";

const InboxPage = ({ navigation }) => {
  const [conversations, setConversations] = useState([
    {
      id: "1",
      tenantName: "John Doe",
      lastMessage: "Hey, about the rent...",
      timestamp: "10:45 AM",
      unread: true,
      profilePhoto: "https://placeimg.com/64/64/people/1", // Placeholder image
    },
    {
      id: "2",
      tenantName: "Jane Smith",
      lastMessage: "All set for this month!",
      timestamp: "Yesterday",
      unread: false,
      profilePhoto: "https://placeimg.com/64/64/people/2", // Placeholder image
    },
    // ... Add more dummy data as needed
  ]);

  const handleBack = () => {
    navigation.navigate("LandlordDashboard");
  };

  const markAsRead = (id) => {
    let updatedConversations = [...conversations];
    let chat = updatedConversations.find((conv) => conv.id === id);
    chat.unread = false;
    setConversations(updatedConversations);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon
            name="arrow-left"
            size={theme.spacing.large}
            color={theme.colors.grey.dark}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Inbox</Text>
      </View>
      <FlatList
        data={conversations}
        style={styles.flatList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("MessagesPage")}
            onLongPress={() => {
              Alert.alert(
                "Mark as Read",
                "Do you want to mark this conversation as read?",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "OK", onPress: () => markAsRead(item.id) },
                ]
              );
            }}
          >
            <Image
              source={{ uri: item.profilePhoto }}
              style={styles.profilePhoto}
            />
            <View style={styles.chatTextContainer}>
              <Text style={styles.chatTitle}>{item.tenantName}</Text>
              <Text style={styles.chatSubtitle}>{item.lastMessage}</Text>
            </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.light,
    top: 30,
  },
  backButton: {
    position: "absolute",
    left: theme.spacing.large,
    zIndex: 10,
    padding: 10,
  },
  helpIcon: {
    position: "absolute",
    right: theme.spacing.large,
    zIndex: 10,
    padding: 10,
  },
  headerText: {
    ...theme.typography.header,
  },
  flatList: {
    marginTop: 30, // To account for the header's top positioning
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey.light,
  },
  chatTextContainer: {
    flex: 1,
    marginLeft: 10,
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
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default InboxPage;
