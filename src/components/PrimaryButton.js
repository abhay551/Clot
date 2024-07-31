import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";

function PrimaryButton({ children, style, onPress }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 36,
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    color: Colors.white,
    paddingVertical: 12,
    fontSize: 16,
  },
});
