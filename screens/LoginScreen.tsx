import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeTabs" }],
    });
  //   const taiKhoan = "thong";
  //   const mk = "123";
  //   if (username === taiKhoan && password === mk) {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "HomeTabs" }],
  //     });
  //     //navigation.navigate("HomeTabs");
  //   } else {
  //     Alert.alert("Thông báo", "Tên đăng nhập hoặc mật khẩu không đúng.");
  //   }
   }

  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      {/* Input Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Or Text */}
      <Text style={styles.orText}>Hoặc</Text>

      {/* Register Button */}
      <TouchableOpacity style={styles.linkButton} onPress={handleRegister}>
        <Text style={styles.linkButtonText}>Đăng ký tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#3498db",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3498db",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#7f8c8d",
    marginVertical: 10,
  },
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    fontSize: 16,
    color: "#3498db",
    fontWeight: "bold",
  },
});
