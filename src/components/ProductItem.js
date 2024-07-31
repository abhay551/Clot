import { React, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductItem = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={
          imageError
            ? require("../../assets/splash.png")
            : { uri: item.imageUrl }
        }
        style={styles.image}
        onError={() => setImageError(true)}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.price}>{`$${item.price}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  image: {
    width: 160,
    height: 220,
    resizeMode: "center",
    borderRadius: 10,
    marginBottom: 5,
    padding: 4,
  },
  textContainer: {
    margin: 4,
  },
  name: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#272727",
    textTransform: "capitalize",
  },
  price: {
    fontSize: 12,
    color: "#272727",
    fontWeight: "bold",
  },
});

export default ProductItem;
