import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import AddressListScreen from "../screens/profile/AddressListScreen";
import AddAddressScreen from "../screens/profile/AddAddressScreen";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="AddressListScreen"
        component={AddressListScreen}
      />
      <ProfileStack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
