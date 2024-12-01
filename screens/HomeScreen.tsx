import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./../component/Header";
import SearchBar from "../component/SearchBar";
import { categories, electronics } from "./../data";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  function handleCategory(categoryname) {
    switch (categoryname) {
      case "Electronics":
        navigation.navigate("ElectronicScreen");
        break;
      case "Fresh Fruit":
        navigation.navigate("FreshfruitScreen", { type: "fruit" });
        break;
      case "Beauty":
        navigation.navigate("FreshfruitScreen", { type: "Beauty" });
        break;
      case "Fashion":
        navigation.navigate("FreshfruitScreen", { type: "Fashion" });
        break;
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Header name={"All deals"} />
        <SearchBar onSearch={""} />
        <View style={styles.container1}>
          <FlatList
            data={categories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.categoryContainer}
                  onPress={() => handleCategory(item.categoryname)}
                >
                  <Image style={styles.categoryImage} source={item.img} />
                  <Text style={styles.textCategory}>{item.categoryname}</Text>
                </TouchableOpacity>
              );
            }}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator
          />
          {/* BANNER */}
          <TouchableOpacity style={{ marginTop: 15 }}>
            <Image
              style={styles.banner}
              source={require("../assets/images/banner/bannerShoe.png")}
            />
          </TouchableOpacity>
          {/* SUBBANNER */}
          <View style={styles.subBannerContainer}>
            <TouchableOpacity>
              <Image
                style={styles.sbuBanner}
                source={require("../assets/images/banner/subBanner.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.sbuBanner}
                source={require("../assets/images/banner/subBannerFruit.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            {/* <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Recommended for you
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 16, fontWeight: "light", marginTop: 10 }}
              >
                See all
              </Text>
            </TouchableOpacity> */}
          </View>
          {/* <FlatList
            style={{ height: 10 }}
            data={products}
            renderItem={({ item }) => {
              return (
                <View style={styles.productCard}>
                  <Image style={styles.productImage} source={item.img} />
                  <Text style={styles.productName}>{item.productName}</Text>
                  <View
                    style={{ justifyContent: "space-between", height: "auto" }}
                  >
                    <Text style={styles.productRating}>⭐ {item.rating}</Text>
                    <Text style={styles.productPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                </View>
              );
            }}
            scrollEnabled={true}
            horizontal
            keyExtractor={(item) => item.id.toString()}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  scroll: { flexShrink: 1 },
  container1: {
    width: "100%",
    alignItems: "center",
  },
  banner: {
    width: 400,
    height: 200,
  },
  subBannerContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    width: "90%",
  },
  sbuBanner: {
    width: 180,
    height: 200,
  },
  categoryContainer: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImage: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  textCategory: {
    fontSize: 21,
    fontWeight: "500", // Sử dụng '500' thay vì 'medium'
  },
  productCard: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Tạo bóng cho card (Android)
  },
  productImage: {
    width: 300,
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productRating: {
    fontSize: 14,
    color: "#555",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00b894",
  },
});
