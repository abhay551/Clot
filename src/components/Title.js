import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.black,
  },
});
