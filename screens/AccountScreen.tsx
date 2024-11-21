import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const navigation = useNavigation();
  function handleLogOut() {
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleLogOut}>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 24 }}>
          Log out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
  },
});
