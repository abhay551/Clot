import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

const HighlightedText = ({ style, text, highlightWord, onPress }) => {
  const regex = new RegExp(`(${highlightWord})`, "gi");
  const parts = text.split(regex);

  return (
    <View style={[styles.container, style]}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlightWord.toLowerCase() ? (
          <Pressable key={index} onPress={onPress}>
            <Text style={styles.highlightText}>{part}</Text>
          </Pressable>
        ) : (
          <Text key={index} style={styles.text}>
            {part}
          </Text>
        )
      )}
    </View>
  );
};

export default HighlightedText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#272727",
  },
  highlightText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#272727",
  },
});
