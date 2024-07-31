import { React } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";

const CategoryListItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
    padding: 12,
    backgroundColor: Colors.bgLight,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    marginRight: 16,
    backgroundColor: Colors.bgLight,
    padding: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "light",
    textTransform: "capitalize",
    color: Colors.black,
    margin: 4,
  },
});

export default CategoryListItem;
