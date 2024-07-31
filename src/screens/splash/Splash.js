import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Image, View, StyleSheet } from "react-native";

const Splash = ({ onFinish }) => {
  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
      onFinish();
    };
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../../assets/splash.png")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E6CEF",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 175,
    height: 80,
  },
});
