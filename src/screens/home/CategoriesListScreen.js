import React from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import CategoryListItem from "../../components/CategoryListItem";
import { useCategories } from "../../context/CategoryContext";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

const CategoriesListScreen = ({ navigation }) => {
  const { categories } = useCategories();

  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate(Routes.productListScreen, { categoryId, categoryName });
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <View style={styles.mainContainer}>
        <BackButton style={styles.backButton} onPress={navigation.goBack} />
        <Title style={styles.title}>Shop by categories</Title>
        <FlatList
          vertical
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              item={item}
              onPress={() => handleCategoryPress(item.id, item.name)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesListScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.white,
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
  },
});
