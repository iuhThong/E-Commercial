import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import { ImageSlider } from "react-native-image-slider-banner";
import { electronics, electronicsBanner } from "../data";
import { itemRednerVertical } from "../component/renderItem";

export default function ElectronicScreen() {
  const [selectedChoice, setSelectedChoice] = useState("Best Sales");
  const [seeAll, setSeeAll] = useState(false);

  // Hàm xử lý khi chọn lựa chọn category
  function handleChoicePress(choice) {
    setSelectedChoice(choice);
  }

  // Hàm xử lý khi click vào nút "See All" hoặc "Show Less"
  function handleSeeAll() {
    setSeeAll(!seeAll);
  }

  // Dữ liệu sẽ được hiển thị, tùy thuộc vào giá trị của `seeAll`
  const data = seeAll ? electronics : electronics.slice(0, 4);

  return (
    <SafeAreaView style={styles.container}>
      <Header name={"Electronics"} />
      <SearchBar />
      <ScrollView>
        <View
          style={{
            width: "90%",
            justifyContent: "space-between",
            marginTop: 15,
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>Category</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "gray" }}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORY */}
        <View style={styles.categories}>
          <View style={styles.categories_choice}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/category/ctg_mobile.png")}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.categories_choice}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/category/ctg_ipad.png")}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.categories_choice}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/category/ctg_Laptop.png")}
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.choice}>
          {["Best Sales", "Best Matched", "Popular"].map((choice) => (
            <TouchableOpacity
              key={choice}
              style={[
                styles.touchChoice,
                selectedChoice === choice && styles.choiceActive,
              ]}
              onPress={() => handleChoicePress(choice)}
            >
              <Text
                style={[
                  styles.textChoice,
                  selectedChoice === choice && styles.textChoiceActive,
                ]}
              >
                {choice}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hiển thị sản phẩm */}
        <View style={styles.product}>
          <FlatList
            data={data} // Sử dụng data đã được lọc
            renderItem={({ item }) => itemRednerVertical(item)} // Render item bằng hàm itemRednerVertical
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}
            contentContainerStyle={{ marginBottom: 20 }}
          />
        </View>

        {/* Nút See all / Show Less */}
        <TouchableOpacity style={styles.btnSeeAll} onPress={handleSeeAll}>
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {seeAll ? "Show Less" : "See All"}
          </Text>
        </TouchableOpacity>

        {/* BANNER */}
        <View>
          <ImageSlider
            data={electronicsBanner}
            autoPlay={true}
            timer={3000}
            indicatorActiveColor="#FF6347"
            indicatorInActiveColor="#D3D3D3"
            closeIconColor="#fff"
            style={styles.imageSlider}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  scroll: {
    width: "100%",
    alignItems: "center",
    padding: 8,
    flexShrink: 1,
  },
  categories: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    marginTop: 15,
  },
  categories_choice: {
    flex: 0.5,
    borderRadius: 12,
    height: 120,
    marginHorizontal: 5,
  },
  choice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  touchChoice: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 105,
    borderWidth: 1,
    borderRadius: 16,
  },
  textChoice: {
    opacity: 0.6,
  },
  choiceActive: {
    backgroundColor: "#CCFFFF",
  },
  textChoiceActive: {
    color: "black",
    fontWeight: "bold",
  },
  product: {
    marginTop: 20,
    flex: 1,
    width: "100%",
  },
  btnSeeAll: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    marginLeft: 15,
    height: 40,
  },
  imageSlider: {
    height: 200,
    width: 400,
    resizeMode: "contain",
  },
});
