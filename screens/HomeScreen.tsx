import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./../component/Header";
import SearchBar from "../component/SearchBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={"All deals"} />
      <SearchBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
