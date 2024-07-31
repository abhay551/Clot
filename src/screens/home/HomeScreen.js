import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import CategoryItem from "../../components/CategoryItem";
import ProductItem from "../../components/ProductItem";
import { fetchCategories, fetchProducts } from "../../api/Api";
import CategoryDropdown from "../../components/CategoryDropdown";
import { useCategories } from "../../context/CategoryContext";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

const HomeScreen = ({ navigation }) => {
  const { categories, setCategories, setSelectedCategory } = useCategories();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
        ]);
        setCategories(categoriesData);
        setProducts(productsData);
        if (categoriesData.length > 0) {
          setSelectedCategory(categoriesData[0].id);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setCategories, setSelectedCategory]);

  const navigateToCategoriesList = useCallback(() => {
    navigation.navigate(Routes.categoriesListScreen, { categories });
  }, [navigation, categories]);

  const navigateToProductList = useCallback(() => {
    navigation.navigate(Routes.productListScreen, { products });
  }, [navigation, products]);

  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate(Routes.productListScreen, { categoryId, categoryName });
  };

  const navigateToProfileScreen = () => {
    navigation.navigate(Routes.profileStackScreen);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.rootScreenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Pressable onPress={navigateToProfileScreen}>
              <Image
                style={styles.menuItem}
                source={require("../../../assets/images/men.png")}
              />
            </Pressable>
            <CategoryDropdown />
            <Pressable>
              <Image
                style={styles.menuItem}
                source={require("../../../assets/images/add_to_cart.png")}
              />
            </Pressable>
          </View>
          <TextInput style={styles.search} placeholder={Strings.search} />
          <Section
            title={Strings.categories}
            onPressSeeAll={navigateToCategoriesList}
            data={categories}
            renderItem={(item) => (
              <CategoryItem
                item={item}
                onPress={() => handleCategoryPress(item.id, item.name)}
              />
            )}
          />
          <Section
            title={Strings.topSelling}
            onPressSeeAll={navigateToProductList}
            data={products.slice(0, 5)}
            renderItem={(item) => <ProductItem item={item} />}
          />
          <Section
            title={Strings.newIn}
            onPressSeeAll={navigateToProductList}
            data={products.slice(-5)}
            renderItem={(item) => <ProductItem item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section = ({ title, onPressSeeAll, data, renderItem }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionTitleContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Pressable onPress={onPressSeeAll}>
        <Text style={styles.sectionText}>{Strings.seeAll}</Text>
      </Pressable>
    </View>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  rootScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    margin: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuItem: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  search: {
    height: 40,
    padding: 10,
    backgroundColor: Colors.bgLight,
    borderRadius: 20,
  },
  sectionContainer: {
    marginTop: 24,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "regular",
    color: Colors.black,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
