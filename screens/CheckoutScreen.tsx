import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CartItem = ({ item }) => (
  <View style={styles.cartItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productSubtitle}>{item.subtitle}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <Text style={styles.quantity}>x{item.quantity}</Text>
      <TouchableOpacity>
        <Ionicons name="pencil-outline" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Checkout({ route }) {
  const [voucher, setVoucher] = useState("");
  const [isApplyEnabled, setIsApplyEnabled] = useState(false);
  const navigation = useNavigation();

  // Sample cart data with online images
  const cartItems = [
    {
      id: "1",
      title: "Headphone",
      subtitle: "Consequat ex eu",
      price: 500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "2",
      title: "Headphone",
      subtitle: "Consequat ex eu",
      price: 300,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "3",
      title: "Smartphone",
      subtitle: "Consequat ex eu",
      price: 1000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "4",
      title: "Smartphone",
      subtitle: "Consequat ex eu",
      price: 1000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const handleVoucherChange = (text) => {
    setVoucher(text);
    setIsApplyEnabled(text.length > 0);
  };

  const handleApplyVoucher = () => {
    // Add voucher application logic here
    console.log("Applying voucher:", voucher);
  };

  const handleNextPress = () => {
    navigation.navigate("PaymentScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

        <View style={styles.voucherSection}>
          <Text style={styles.voucherLabel}>Voucher</Text>
          <View style={styles.voucherInputContainer}>
            <TextInput
              placeholder="Enter voucher code"
              value={voucher}
              onChangeText={handleVoucherChange}
              style={styles.voucherInput}
              mode="outlined"
            />
            <TouchableOpacity
              onPress={handleApplyVoucher}
              disabled={!isApplyEnabled}
              style={[
                styles.applyButton,
                { opacity: isApplyEnabled ? 1 : 0.5 },
              ]}
            >
              <Text
                style={[
                  styles.applyButtonText,
                  { color: isApplyEnabled ? "#007AFF" : "gray" },
                ]}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalAmount}>$2,800</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
      </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  cartItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  productSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  quantity: {
    fontSize: 16,
    color: "gray",
  },
  voucherSection: {
    padding: 16,
  },
  voucherLabel: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  voucherInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  voucherInput: {
    flex: 1,
    marginRight: 12,
    backgroundColor: "white",
  },
  applyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  totalLabel: {
    fontSize: 16,
    color: "gray",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B4D8",
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },
});
