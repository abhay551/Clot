import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import Strings from "../../constants/Strings";
import Colors from "../../constants/Colors";
import Routes from "../../constants/Routes";

const AddressListScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const navigation = useNavigation();

  const fetchAddresses = async () => {
    try {
      const storedAddresses = await AsyncStorage.getItem("addresses");
      if (storedAddresses) {
        setAddresses(JSON.parse(storedAddresses));
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );

  const renderAddressItem = ({ item, index }) => (
    <View style={styles.addressItem}>
      <Text style={styles.addressText}>
        {item.streetAddress}, {item.city}, {item.state}, {item.zipCode}
      </Text>
      <Pressable
        onPress={() =>
          navigation.navigate(Routes.addAddressScreen, { addressId: index })
        }
      >
        <Text style={styles.editButtonText}>{Strings.edit}</Text>
      </Pressable>
    </View>
  );

  const handleAddAddress = () => {
    navigation.navigate(Routes.addAddressScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{Strings.addresses}</Text>
        <Pressable onPress={handleAddAddress}>
          <Text style={styles.addButtonText}>{Strings.add}</Text>
        </Pressable>
      </View>
      <FlatList
        data={addresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAddressItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>{Strings.noAddressFound}</Text>
        }
      />
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
    fontSize: 16,
    fontWeight: "bold",
  },
  addButtonText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 16,
  },
  addressItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: Colors.bgLight,
    borderRadius: 8,
  },
  addressText: {
    fontSize: 16,
    flex: 1,
  },
  editButtonText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: Colors.black,
  },
});

export default AddressListScreen;
