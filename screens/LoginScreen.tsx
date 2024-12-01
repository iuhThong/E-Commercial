import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Uncomment and customize authentication logic here:
    const taiKhoan = "thong";
    const mk = "123";
    if (username === taiKhoan && password === mk) {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      });
    } else {
      Alert.alert("Thông báo", "Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  }

  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../assets/animation/Animation1.json")}
        autoPlay
        loop={true}
        style={{
          width: 300,
          height: 300,
          backgroundColor: "#eee",
        }}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Log in to continue shopping</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Create an Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#e74c3c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#e74c3c",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    color: "#7f8c8d",
    marginVertical: 10,
  },
  registerButton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#e74c3c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
});
