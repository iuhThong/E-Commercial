import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import { ImageSlider } from "react-native-image-slider-banner";
import SearchBar from "./../component/SearchBar";
import { fruitBanner, products } from "../data";
import { Ionicons } from "@expo/vector-icons";
import ItemRenderVertical from "./../component/renderItem";
import { useNavigation } from "@react-navigation/native";
export default function FreshfruitScreen({ route }) {
  const navigation = useNavigation();
  const { type } = route.params;
  console.log(type);
  const [seeAll, setSeeAll] = useState(false);
  let dataTmp = [];
  switch (type) {
    case "Fashion":
      dataTmp = products.filter((item) => item.type === "Fashion");
      break;
    case "Beauty":
      dataTmp = products.filter((item) => item.type === "Beauty");
      break;
    case "fruit":
      dataTmp = products.filter((item) => item.type === "fruit");
      break;
    default:
      dataTmp = []; // Trường hợp không có type hợp lệ
      break;
  }
  const data = seeAll ? dataTmp : dataTmp.slice(0, 4);
  // const handlePress = () => {
  //   console.log(item.id);
  //   navigation.navigate("ProductDetailScreen", {
  //     id: item.id,
  //   });
  // };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <Header name="Fresh Fruit" />
        <SearchBar />
        <View>
          <ImageSlider
            data={fruitBanner}
            autoPlay={true}
            timer={3000}
            indicatorContainerStyle={styles.indicatorContainer}
            indicatorActiveColor="#FF6347"
            indicatorInActiveColor="#D3D3D3"
            closeIconColor="#fff"
            style={styles.imageSlider}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => {
                  navigation.navigate("ProductDetailScreen", {
                    id: item.id,
                  });
                }}
              >
                <Image source={item.img} style={styles.imgCard} />
                <View style={styles.contentCard}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{ borderRadius: 30, borderWidth: 1 }}
                  >
                    <Ionicons name="add" size={24} />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentCard}>
                  <Text>{item.rating}⭐</Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.price}$
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={{ marginBottom: 20 }}
        />
        <TouchableOpacity
          style={styles.btnSeeAll}
          onPress={() => {
            setSeeAll(!seeAll);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {seeAll ? "Show Less" : "See All"}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            justifyContent: "space-between",
            marginTop: 15,
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Relevant products
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "gray" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data.slice(0, 2)}
          renderItem={({ item }) => <ItemRenderVertical item={item} />} // Sử dụng component
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={{ marginBottom: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  imageSlider: {
    height: 200,
    width: "100%",
  },
  indicatorContainer: {
    marginTop: -30,
  },
  cardContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imgCard: {
    height: 120,
    width: 120,
    marginBottom: 8,
  },
  contentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  btnSeeAll: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    marginLeft: 15,
    height: 40,
  },
});
