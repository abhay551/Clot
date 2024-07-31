import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function SecondaryButton({ children, style, onPress }) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    color: Colors.bgLight,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    color: Colors.bgLight,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
