import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const SignInWithButton = ({ children, style, iconSource, onPress }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={styles.signInButton}>
        <View style={styles.iconContainer}>
          <Image source={iconSource} style={styles.icon} resizeMode="contain" />
        </View>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Colors.bgLight,
    borderRadius: 36,
  },
  iconContainer: {
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
    color: Colors.black,
  },
});

export default SignInWithButton;
