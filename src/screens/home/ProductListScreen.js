import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import { fetchProducts } from "../../api/Api";

const ProductListScreen = ({ route, navigation }) => {
  const { categoryName } = route.params;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (categoryName) {
      const filtered = products.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryName, products]);

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const renderProductItem = ({ item }) => <ProductItem item={item} />;

  return (
    <SafeAreaView style={styles.rootScreen}>
      <View style={styles.mainContainer}>
        <BackButton style={styles.backButton} onPress={backButtonHandler} />
        <Title style={styles.title}>{categoryName || "All Products"}</Title>
        <View style={styles.gridContainer}>
          <FlatList
            numColumns={2}
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mainContainer: {
    padding: 24,
  },
  backButton: {
    marginTop: 32,
    marginLeft: 4,
    marginBottom: 20,
  },
  title: {
    marginBottom: 32,
    textTransform: "capitalize",
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
});
