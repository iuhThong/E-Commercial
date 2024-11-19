import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

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

  // Custom toggle component with full square color change
  const CustomToggle = ({ isSelected, onPress }) => (
    <Pressable
      onPress={onPress}
      style={[styles.squareToggle, isSelected && styles.selectedSquareToggle]}
    />
  );

  return (
    <View>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for product"
          placeholderTextColor="gray"
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
                <View key={option} style={styles.toggleContainer}>
                  <CustomToggle
                    isSelected={selectedShippingOptions.includes(option)}
                    onPress={() => toggleShippingOption(option)}
                  />
                  <Text style={styles.toggleLabel}>{option}</Text>
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
    paddingVertical: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
    fontFamily: "Roboto",
  },
  filterButton: {
    marginLeft: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    maxHeight: "85%",
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  filterOptions: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 8,
    color: "#333",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  toggleLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },
  squareToggle: {
    width: 24,
    height: 24,
    backgroundColor: "transparent", // Start as transparent
    marginRight: 10,
  },
  selectedSquareToggle: {
    backgroundColor: "#007AFF", // Full green when selected
  },
  priceInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  priceText: {
    fontSize: 16,
    color: "#333",
  },
  slider: {
    flex: 1,
    marginHorizontal: 8,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  reviewLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },
  otherOption: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#E6F0FF",
    borderColor: "#007AFF",
  },
  unselectedText: {
    color: "#555",
  },
  selectedText: {
    color: "#007AFF",
  },
  applyButton: {
    backgroundColor: "#007AFF",
    borderRadius: 15,
    paddingVertical: 14,
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
