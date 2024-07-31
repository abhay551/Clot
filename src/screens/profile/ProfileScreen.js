import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

const ProfileScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const handleSignOutPress = () => {
    Alert.alert(Strings.confirmSignOut, Strings.areYouSureWantToSignOut, [
      {
        text: Strings.cancel,
        onPress: () => {},
        style: "cancel",
      },
      {
        text: Strings.signOut,
        onPress: () => {
          logout();
        },
      },
    ]);
  };
  function navigateToAddress() {
    navigation.navigate(Routes.addressListScreen);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../../assets/images/men.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.userDetailContainer}>
        <Text style={styles.name}>{Strings.userName}</Text>
        <Text style={styles.email}>{Strings.userEmail}</Text>
        <Text style={styles.phone}>{Strings.userPhone}</Text>
      </View>
      <Pressable style={styles.optionContainer} onPress={navigateToAddress}>
        <Text style={styles.optionText}>{Strings.address}</Text>
        <Image
          source={require("../../../assets/images/right_arrow.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable style={styles.optionContainer} onPress={() => {}}>
        <Text style={styles.optionText}>{Strings.wishList}</Text>
        <Image
          source={require("../../../assets/images/right_arrow.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable style={styles.optionContainer} onPress={() => {}}>
        <Text style={styles.optionText}>{Strings.payment}</Text>
        <Image
          source={require("../../../assets/images/right_arrow.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable style={styles.optionContainer} onPress={() => {}}>
        <Text style={styles.optionText}>{Strings.help}</Text>
        <Image
          source={require("../../../assets/images/right_arrow.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable style={styles.optionContainer} onPress={() => {}}>
        <Text style={styles.optionText}>{Strings.support}</Text>
        <Image
          source={require("../../../assets/images/right_arrow.png")}
          style={styles.arrowIcon}
        />
      </Pressable>
      <Pressable style={styles.signOutButton} onPress={handleSignOutPress}>
        <Text style={styles.signOutText}>{Strings.signOut}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userDetailContainer: {
    width: "90%",
    backgroundColor: Colors.bgLight,
    margin: 24,
    padding: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: Colors.black,
  },
  phone: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Colors.bgLight,
    borderRadius: 8,
    width: "90%",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  signOutButton: {
    alignItems: "center",
    marginTop: 20,
  },
  signOutText: {
    color: Colors.red,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileScreen;
