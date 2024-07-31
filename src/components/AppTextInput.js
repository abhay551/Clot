import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function AppTextInput({
  style,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}) {
  return (
    <TextInput
      style={[styles.inputText, style]}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: Colors.bgLight,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
