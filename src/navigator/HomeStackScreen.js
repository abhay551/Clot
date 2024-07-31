import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import CategoriesListScreen from "../screens/home/CategoriesListScreen";
import ProductListScreen from "../screens/home/ProductListScreen";
import Routes from "../constants/Routes";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName={Routes.homeScreen}
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name={Routes.homeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={Routes.productListScreen}
        component={ProductListScreen}
      />
      <HomeStack.Screen
        name={Routes.categoriesListScreen}
        component={CategoriesListScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
