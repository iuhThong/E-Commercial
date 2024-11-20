import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "./../component/SearchBar";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop:30
  },
});
