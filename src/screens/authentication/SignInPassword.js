import { View, StyleSheet, Alert } from "react-native";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/PrimaryButton";
import AppTextInput from "../../components/AppTextInput";
import HighlightedText from "../../components/HighlightedText";
import Title from "../../components/Title";
import Strings from "../../constants/Strings";
import { useAuth } from "../../context/AuthContext";
import { useState, useCallback } from "react";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

function SignInPassword({ route, navigation }) {
  const { userName } = route.params;
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backButtonHandler = () => {
    navigation.goBack();
  };

  const continueButtonHandler = useCallback(async () => {
    if (password.trim().length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long."
      );
      return;
    }

    setIsLoading(true);

    try {
      const credentials = {
        username: userName,
        password: password,
      };
      await login(credentials);
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.homeScreen }],
      });
    } catch (error) {
      console.error("Login error sign in password screen:", error);
      Alert.alert("Login Failed", error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  }, [password, login, navigation, userName]);

  const resetButtonHandler = () => {
    navigation.navigate(Routes.forgotPassword);
  };

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} onPress={backButtonHandler} />
      <Title>{Strings.signIn}</Title>
      <AppTextInput
        placeholder={Strings.password}
        style={styles.inputText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <PrimaryButton
        style={styles.continueButton}
        onPress={continueButtonHandler}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : Strings.continue}
      </PrimaryButton>
      <HighlightedText
        text={Strings.forgotPasswordReset}
        highlightWord="Reset"
        style={styles.reset}
        onPress={resetButtonHandler}
      />
    </View>
  );
}

export default SignInPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  backButton: {
    marginTop: 64,
    marginLeft: 4,
    marginBottom: 20,
  },
  inputText: {
    marginTop: 32,
  },
  continueButton: {
    marginVertical: 16,
  },
  reset: {
    marginBottom: 70,
  },
});
