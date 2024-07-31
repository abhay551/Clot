import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import AppTextInput from "../../components/AppTextInput";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";

const AddAddressScreen = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const { addressId } = route.params || {};

  useEffect(() => {
    if (addressId !== undefined) {
      const fetchAddress = async () => {
        try {
          const storedAddresses = await AsyncStorage.getItem("addresses");
          if (storedAddresses) {
            const addresses = JSON.parse(storedAddresses);
            const address = addresses[addressId];
            if (address) {
              setStreetAddress(address.streetAddress);
              setCity(address.city);
              setState(address.state);
              setZipCode(address.zipCode);
            }
          }
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      };
      fetchAddress();
    }
  }, [addressId]);

  const validateInput = () => {
    if (!streetAddress || !city || !state || !zipCode) {
      setError("All fields are required");
      return false;
    }
    return true;
  };

  const handleSaveAddress = async () => {
    if (!validateInput()) return;

    try {
      const newAddress = { streetAddress, city, state, zipCode };
      const storedAddresses = await AsyncStorage.getItem("addresses");
      let addresses = storedAddresses ? JSON.parse(storedAddresses) : [];

      if (addressId !== undefined) {
        addresses[addressId] = newAddress;
      } else {
        addresses.push(newAddress);
      }

      await AsyncStorage.setItem("addresses", JSON.stringify(addresses));
      navigation.goBack();
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{Strings.addAddress}</Text>
        <View style={{ width: 50 }} />
      </View>
      <ScrollView contentContainerStyle={styles.form}>
        <AppTextInput
          placeholder={Strings.streetAddress}
          value={streetAddress}
          onChangeText={setStreetAddress}
        />
        <AppTextInput
          placeholder={Strings.city}
          value={city}
          onChangeText={setCity}
        />
        <View style={styles.stateContainer}>
          <AppTextInput
            style={styles.halfInput}
            placeholder={Strings.state}
            value={state}
            onChangeText={setState}
          />
          <AppTextInput
            style={styles.halfInput}
            placeholder={Strings.zipCode}
            value={zipCode}
            onChangeText={setZipCode}
            keyboardType="numeric"
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </ScrollView>
      <Pressable style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>{Strings.save}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  form: {
    flexGrow: 1,
    padding: 16,
  },
  stateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 16,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  errorText: {
    color: Colors.red,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default AddAddressScreen;
