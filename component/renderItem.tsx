import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const itemRednerVertical = (item) => {
  return (
    <View style={styles.cart}>
      <View style={styles.imgBox}>
        <Image source={item.img} style={styles.img} />
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.titleItem}>{item.name}</Text>
        <Text style={styles.rating}>{item.rating}⭐</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="add-circle-outline" size={35} />
        </TouchableOpacity>
        <Text style={styles.price}>{item.price}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: "90%",
    flexDirection: "row",
    marginLeft: 15,
    marginVertical: 3,
  },
  imgBox: {
    flex: 0.35,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  detailBox: {
    flex: 0.6,
    marginVertical: 10,
    marginLeft: 15,
  },
  titleItem: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: "light",
    marginVertical: 10,
  },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
  },
});