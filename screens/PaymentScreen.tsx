import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PaymentMethodCard = ({ method, isSelected, onSelect }) => (
  <TouchableOpacity
    style={[styles.paymentMethod, isSelected && styles.selectedPaymentMethod]}
    onPress={() => onSelect(method.id)}
  >
    <View style={styles.paymentMethodLeft}>
      <Image source={{ uri: method.icon }} style={styles.paymentIcon} />
      <Text style={styles.paymentText}>{method.lastDigits}</Text>
    </View>
    <View
      style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
    >
      {isSelected && <View style={styles.radioButtonInner} />}
    </View>
  </TouchableOpacity>
);

export default function Payment({ route }) {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState("1");

  // Sample payment methods data
  const paymentMethods = [
    {
      id: "1",
      type: "visa",
      lastDigits: "****** 2334",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    },
    {
      id: "2",
      type: "mastercard",
      lastDigits: "****** 3774",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
    },
    {
      id: "3",
      type: "paypal",
      lastDigits: "abc@gmail.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png",
    },
  ];

  const handlePayNow = () => {
    if (!selectedMethod) {
      Alert.alert("Error", "Please select a payment method");
      return;
    }

    // Add payment processing logic here
    Alert.alert(
      "Payment Confirmation",
      "Are you sure you want to proceed with the payment?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Process payment logic here
            Alert.alert("Success", "Payment processed successfully!");
            // Navigate to success screen or home
            navigation.navigate("PaymentSuccessScreen");
          },
        },
      ]
    );
  };

  const handleAddCard = () => {
    // Navigate to add new card screen
    navigation.navigate("AddCard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={styles.totalAmount}>$2520.00</Text>
      </View>

      <View style={styles.paymentMethodsContainer}>
        {paymentMethods.map((method) => (
          <PaymentMethodCard
            key={method.id}
            method={method}
            isSelected={selectedMethod === method.id}
            onSelect={setSelectedMethod}
          />
        ))}
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Ionicons
            name="card-outline"
            size={24}
            color="white"
            style={styles.payNowIcon}
          />
          <Text style={styles.payNowText}>Pay now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
          <Ionicons
            name="add"
            size={24}
            color="#00B4D8"
            style={styles.addCardIcon}
          />
          <Text style={styles.addCardText}>Add new card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  totalSection: {
    alignItems: "center",
    paddingVertical: 24,
  },
  totalLabel: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: "bold",
  },
  paymentMethodsContainer: {
    padding: 16,
  },
  paymentMethod: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedPaymentMethod: {
    borderColor: "#00B4D8",
    backgroundColor: "#F8F9FA",
  },
  paymentMethodLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    width: 40,
    height: 25,
    resizeMode: "contain",
    marginRight: 12,
  },
  paymentText: {
    fontSize: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    borderColor: "#00B4D8",
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00B4D8",
  },
  bottomButtons: {
    padding: 16,
    marginTop: "auto",
  },
  payNowButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B4D8",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  payNowIcon: {
    marginRight: 8,
  },
  payNowText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  addCardButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  addCardIcon: {
    marginRight: 8,
  },
  addCardText: {
    color: "#00B4D8",
    fontSize: 16,
    fontWeight: "500",
  },
});
