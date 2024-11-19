// Header.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ name }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 16,
  },
});

export default Header;
