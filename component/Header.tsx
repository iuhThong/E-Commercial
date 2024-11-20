import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ name }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.header}>
      {/* Mũi tên quay lại hiển thị khi có thể quay lại */}
      {canGoBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, !canGoBack && styles.titleNoGoBack]}>
        {name}
      </Text>
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
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center", // Tiêu đề căn giữa khi có mũi tên quay lại
  },
  titleNoGoBack: {
    textAlign: "left", // Tiêu đề căn trái khi không có mũi tên quay lại
    paddingLeft: 16,
  },
  rightIcons: {
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: 16,
  },
});

export default Header;
