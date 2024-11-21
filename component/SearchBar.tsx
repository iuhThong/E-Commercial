import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Checkbox } from "react-native-paper";

const SearchBar = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedShippingOptions, setSelectedShippingOptions] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 10, max: 1000 });
  const [averageReview, setAverageReview] = useState(3);
  const [others, setOthers] = useState({
    "30-day Free Return": false,
    "Buyer Protection": false,
    "Best Deal": false,
    "Ship to store": false,
  });

  const toggleShippingOption = (option) => {
    setSelectedShippingOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const toggleOtherOption = (option) => {
    setOthers((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <View>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for product"
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Ionicons name="options-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter</Text>
              <TouchableOpacity onPress={() => setFilterVisible(false)}>
                <Ionicons name="close-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.filterOptions}>
              {/* Shipping Options */}
              <Text style={styles.sectionTitle}>Shipping options</Text>
              {[
                "Instant (2 hours delivery)",
                "Express (2 days delivery)",
                "Standard (7-10 days delivery)",
              ].map((option) => (
                <View key={option} style={styles.checkboxContainer}>
                  <Checkbox
                    status={
                      selectedShippingOptions.includes(option)
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => toggleShippingOption(option)}
                    color="#007AFF"
                  />
                  <Text style={styles.checkboxLabel}>{option}</Text>
                </View>
              ))}

              {/* Price Range */}
              <Text style={styles.sectionTitle}>Price range</Text>
              <View style={styles.priceInputContainer}>
                <Text style={styles.priceText}>${priceRange.min}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={10}
                  maximumValue={1000}
                  step={10}
                  value={priceRange.min}
                  onValueChange={(value) =>
                    setPriceRange((prev) => ({ ...prev, min: value }))
                  }
                  minimumTrackTintColor="#007AFF"
                  maximumTrackTintColor="#D3D3D3"
                />
                <Text style={styles.priceText}>${priceRange.max}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={10}
                  maximumValue={1000}
                  step={10}
                  value={priceRange.max}
                  onValueChange={(value) =>
                    setPriceRange((prev) => ({ ...prev, max: value }))
                  }
                  minimumTrackTintColor="#007AFF"
                  maximumTrackTintColor="#D3D3D3"
                />
              </View>

              {/* Average Review */}
              <Text style={styles.sectionTitle}>Average review</Text>
              <View style={styles.reviewContainer}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <TouchableOpacity
                    key={rating}
                    onPress={() => setAverageReview(rating)}
                  >
                    <Ionicons
                      name={averageReview >= rating ? "star" : "star-outline"}
                      size={24}
                      color={averageReview >= rating ? "#FFD700" : "gray"}
                    />
                  </TouchableOpacity>
                ))}
                <Text style={styles.reviewLabel}>& Up</Text>
              </View>

              {/* Others */}
              <Text style={styles.sectionTitle}>Others</Text>
              {Object.keys(others).map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.otherOption,
                    others[option] && styles.selectedOption,
                  ]}
                  onPress={() => toggleOtherOption(option)}
                >
                  <Text
                    style={
                      others[option]
                        ? styles.selectedText
                        : styles.unselectedText
                    }
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Apply Button */}
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setFilterVisible(false)}
            >
              <Text style={styles.applyButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  filterButton: {
    padding: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 10,
  },
  priceInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reviewLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  otherOption: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#E6F0FF",
    borderColor: "#007AFF",
  },
  unselectedText: {
    color: "#333",
  },
  selectedText: {
    color: "#007AFF",
  },
  applyButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchBar;
