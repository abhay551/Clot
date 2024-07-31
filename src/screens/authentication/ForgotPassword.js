import { View, StyleSheet } from "react-native";
import BackButton from "../../components/BackButton";
import PrimaryButton from "../../components/PrimaryButton";
import AppTextInput from "../../components/AppTextInput";
import Title from "../../components/Title";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";

function ForgotPassword({ navigation }) {
  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} onPress={backButtonHandler} />
      <Title>{Strings.forgotPassword}</Title>
      <AppTextInput
        placeholder={Strings.enterEmailAddress}
        style={styles.inputText}
      />
      <PrimaryButton style={styles.continueButton}>
        {Strings.continue}
      </PrimaryButton>
    </View>
  );
}

export default ForgotPassword;

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
