import { React } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";

const CategoryItem = ({ item, onPress }) => {
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
    alignItems: "center",
    marginRight: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    backgroundColor: Colors.bgLight,
    padding: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "normal",
    textTransform: "capitalize",
    color: Colors.black,
    margin: 4,
  },
});

export default CategoryItem;
