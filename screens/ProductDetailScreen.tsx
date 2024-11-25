import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { electronics, fruitData } from "../data";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetailScreen({ route }) {
  const navigation = useNavigation();
  const { id, type } = route.params;
  const [showAllReviews, setShowAllReviews] = useState(false);
  let item;

  // Lấy thông tin sản phẩm dựa trên ID và type
  switch (type) {
    case "electronic":
      item = electronics.find((product) => product.id === id);
      break;
    case "fruit":
      item = fruitData.find((product) => product.id === id);
      break;
    default:
      break;
  }
  function handleBuyNow() {
    navigation.navigate("CheckoutScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header name={item?.name || "Product Details"} />

      <ScrollView>
        {/* Thông tin sản phẩm */}
        <View style={styles.productContainer}>
          <Image source={item?.img} style={styles.productImage} />
          <View
            style={{
              width: "90%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.productPrice}>${item?.price}</Text>
            <Text style={styles.productRating}>
              ⭐ {item?.rating} ({item?.reviews?.length || 0} reviews)
            </Text>
          </View>
        </View>

        {/* Mô tả sản phẩm */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>

        {/* Reviews */}
        <View style={styles.section}>
          <View style={styles.reviewHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity
              onPress={() => setShowAllReviews(!showAllReviews)}
            >
              <Text style={styles.seeAll}>
                {showAllReviews ? "Show less" : "See all"}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={showAllReviews ? item?.reviews : item?.reviews.slice(0, 2)}
            keyExtractor={(review) => review.id.toString()}
            renderItem={({ item: review }) => (
              <View style={styles.review}>
                <Text style={styles.reviewAuthor}>{review.userName}</Text>
                <Text style={styles.reviewTime}>{review.time}</Text>
                <Text style={styles.reviewText}>{review.comment}</Text>
                <View style={styles.reviewStars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Text
                      key={index}
                      style={{
                        color: index < review.rating ? "#FFC107" : "#E0E0E0",
                      }}
                    >
                      ★
                    </Text>
                  ))}
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Nút giỏ hàng và mua sản phẩm */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#2196F3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 15,
  },
  productContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productPrice: {
    fontSize: 18,
    color: "#555",
  },
  productRating: {
    fontSize: 16,
    color: "#888",
  },
  section: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeAll: {
    fontSize: 14,
    color: "#2196F3",
    fontWeight: "bold",
  },
  review: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewTime: {
    fontSize: 14,
    color: "#888",
  },
  reviewText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  reviewStars: {
    flexDirection: "row",
    marginTop: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  cartButton: {
    borderWidth: 2,
    borderColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  buyButton: {
    flex: 1,
    backgroundColor: "darkblue",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 16,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
