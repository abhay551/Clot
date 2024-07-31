import { View, Pressable, StyleSheet, Image } from "react-native";

function BackButton({ style, onPress }) {
  return (
    <View style={style}>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/back_arrow.png")}
            style={styles.icon}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 16,
    height: 16,
    padding: 12,
  },
});
