import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import BackButton from "../../components/BackButton";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";
import Strings from "../../constants/Strings";

function OrderScreen({ navigation }) {
  const handleExploreCategories = () => {
    navigation.navigate(Routes.categoriesListScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{Strings.orders}</Text>
        <View style={{ width: 50 }} />
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/images/check_out.png")}
          style={styles.image}
        />
        <Text style={styles.message}>{Strings.noOrdersYet}</Text>
        <Pressable style={styles.button} onPress={handleExploreCategories}>
          <Text style={styles.buttonText}>{Strings.exploreCategories}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.black,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
