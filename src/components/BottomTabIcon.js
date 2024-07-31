import React from "react";
import { Image, StyleSheet } from "react-native";

const BottomTabIcon = ({ source, color }) => {
  const styles = StyleSheet.create({
    image: {
      height: 24,
      width: 24,
      tintColor: color,
    },
  });

  return <Image source={source} style={styles.image} />;
};

export default BottomTabIcon;
