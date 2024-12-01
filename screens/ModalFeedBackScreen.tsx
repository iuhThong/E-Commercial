import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ModalFeedBackScreen = ({ visible, onClose, navigation }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const reasons = [
    "Service",
    "Quantity",
    "Payment",
    "Delivery",
    "Promotion",
    "Gift",
  ];

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((item) => item !== reason)
        : [...prev, reason]
    );
  };

  const handleImageUpload = () => {
    // Simulate image upload logic
    setUploadedImage("https://via.placeholder.com/150");
  };

  const handleSubmit = () => {
    // Handle form submission (feedback)
    console.log("Feedback Submitted:", {
      selectedReasons,
      rating,
      feedbackText,
      uploadedImage,
    });
    onClose(); // Close the modal

    // Navigate to the Home screen
    navigation.navigate("Home"); // Use navigation to go back to the Home screen
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Feedback</Text>
{/* 
          <View style={styles.emoticonContainer}>
            <Ionicons name="sad-outline" size={32} color="gray" />
            <Ionicons name="remove-outline" size={32} color="gray" />
            <Ionicons name="happy-outline" size={32} color="blue" />
          </View> */}

          {/* Reason selection (buttons) */}
          <ScrollView horizontal style={styles.reasonsContainer}>
            {reasons.map((reason) => (
              <TouchableOpacity
                key={reason}
                style={[
                  styles.reasonButton,
                  selectedReasons.includes(reason) && styles.selectedReason,
                ]}
                onPress={() => toggleReason(reason)}
              >
                <Text style={styles.reasonText}>{reason}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TextInput
            style={styles.textInput}
            placeholder="Care to share more?"
            value={feedbackText}
            onChangeText={setFeedbackText}
          />

          {/* Image Upload Section */}
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleImageUpload}
          >
            {uploadedImage ? (
              <Image
                source={{ uri: uploadedImage }}
                style={styles.uploadedImage}
              />
            ) : (
              <Ionicons name="camera-outline" size={24} color="gray" />
            )}
          </TouchableOpacity>

          {/* Rating Section */}
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Ionicons
                  name={star <= rating ? "star" : "star-outline"}
                  size={32}
                  color={star <= rating ? "#FFD700" : "#E5E5E5"}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emoticonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },
  reasonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  reasonButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    marginRight: 10,
  },
  selectedReason: {
    backgroundColor: "#B3D7FF",
  },
  reasonText: {
    fontSize: 14,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  uploadButton: {
    width: 60,
    height: 60,
    backgroundColor: "#F0F0F0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  uploadedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#00B4D8",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ModalFeedBackScreen;
