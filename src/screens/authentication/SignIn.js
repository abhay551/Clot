import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import SignInWithButton from "../../components/SignInWithButton";
import AppTextInput from "../../components/AppTextInput";
import HighlightedText from "../../components/HighlightedText";
import Title from "../../components/Title";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

function SignIn({ navigation }) {
  const [userName, setUserName] = useState("");

  function handleCreateAccount() {
    navigation.navigate(Routes.createAccount);
  }

  function handleContinue() {
    if (userName.trim() === "") {
      Alert.alert("Validation Error", "Username cannot be empty.");
      return;
    }
    navigation.navigate(Routes.signInPassword, { userName });
  }

  return (
    <View style={styles.container}>
      <Title style={styles.headerText}>{Strings.signIn}</Title>
      <AppTextInput
        placeholder={Strings.userNames}
        style={styles.inputText}
        value={userName}
        onChangeText={setUserName}
      />
      <PrimaryButton style={styles.continueButton} onPress={handleContinue}>
        {Strings.continue}
      </PrimaryButton>
      <HighlightedText
        text={Strings.doNotHaveAccountCreateOne}
        highlightWord="Create One"
        style={styles.createAccount}
        onPress={handleCreateAccount}
      />
      <SignInWithButton
        style={styles.secondaryButton}
        iconSource={require("../../../assets/images/apple_icon.png")}
      >
        {Strings.continueWithApple}
      </SignInWithButton>
      <SignInWithButton
        style={styles.secondaryButton}
        iconSource={require("../../../assets/images/google_icon.png")}
      >
        {Strings.continueWithGoogle}
      </SignInWithButton>
      <SignInWithButton
        style={styles.secondaryButton}
        iconSource={require("../../../assets/images/facebook_icon.png")}
      >
        {Strings.continueWithFacebook}
      </SignInWithButton>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  headerText: {
    marginTop: 100,
  },
  inputText: {
    marginTop: 32,
  },
  continueButton: {
    marginVertical: 16,
  },
  createAccount: {
    marginBottom: 70,
  },
  secondaryButton: {
    marginBottom: 12,
  },
});
