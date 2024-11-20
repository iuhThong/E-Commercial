import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { SearchBar } from "react-native-screens";

export default function ElectronicScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={"Electronics"} />
      <SearchBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
