import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useCategories } from "../context/CategoryContext";
import Colors from "../constants/Colors";

const CategoryDropdown = () => {
  const { categories, selectedCategory, setSelectedCategory } = useCategories();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories, selectedCategory, setSelectedCategory]);

  const handleSelectCategory = useCallback(
    (categoryId) => {
      setSelectedCategory(categoryId);
      setModalVisible(false);
    },
    [setSelectedCategory]
  );

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const selectedCategoryName =
    categories.find((cat) => cat.id === selectedCategory)?.name ||
    "Select Category";

  const renderCategoryItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => handleSelectCategory(item.id)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{selectedCategoryName}</Text>
        <Image
          source={require("../../assets/images/drop_down_arrow.png")}
          style={styles.arrow}
        />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Pressable
                style={styles.closeContainer}
                onPress={handleCloseModal}
              >
                <Image
                  style={styles.close}
                  source={require("../../assets/images/close.png")}
                />
              </Pressable>

              <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCategoryItem}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 40,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: Colors.black,
  },
  arrow: {
    marginLeft: 10,
    resizeMode: "contain",
    height: 16,
    width: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 24,
    maxHeight: "50%",
    minHeight: 200,
  },
  closeContainer: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 28,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  close: {
    resizeMode: "contain",
    height: 24,
    width: 24,
  },
  item: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.bgLight,
    borderRadius: 28,
    marginBottom: 16,
  },
  itemText: {
    textTransform: "capitalize",
    color: Colors.black,
    fontSize: 16,
    fontWeight: "semibold",
    padding: 16,
  },
});

export default CategoryDropdown;
