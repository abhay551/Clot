import { View, StyleSheet } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import AppTextInput from "../../components/AppTextInput";
import HighlightedText from "../../components/HighlightedText";
import Title from "../../components/Title";
import BackButton from "../../components/BackButton";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

function CreateAccount({ navigation }) {
  function backButtonHandler() {
    navigation.goBack();
  }
  function resetButtonHandler() {
    navigation.navigate(Routes.forgotPassword);
  }
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} onPress={backButtonHandler} />
      <Title style={styles.title}>{Strings.createAccount}</Title>
      <AppTextInput placeholder={Strings.firstName} style={styles.inputText} />
      <AppTextInput placeholder={Strings.lastName} style={styles.inputText} />
      <AppTextInput
        placeholder={Strings.emailAddress}
        style={styles.inputText}
      />
      <AppTextInput
        placeholder={Strings.password}
        secureTextEntry
        style={styles.inputText}
      />
      <PrimaryButton style={styles.continueButton}>
        {Strings.continue}
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

export default CreateAccount;

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
  title: {
    marginBottom: 32,
  },
  inputText: {
    marginBottom: 16,
  },
  continueButton: {
    marginVertical: 24,
  },
  reset: {
    marginTop: 16,
  },
});
