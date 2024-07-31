import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../screens/notification/NotificationsScreen";
import OrderScreen from "../screens/order/OrdersScreen";
import BottomTabIcon from "../components/BottomTabIcon";
import HomeStackScreen from "./HomeStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import Routes from "../constants/Routes";
const BottomTabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTabNavigation.Navigator
      initialRouteName={Routes.homeScreen}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <BottomTabNavigation.Screen
        name={Routes.homeStackScreen}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabIcon
              source={require("../../assets/images/home.png")}
              color={color}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={Routes.notificationScreen}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabIcon
              source={require("../../assets/images/notification.png")}
              color={color}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={Routes.orderScreen}
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabIcon
              source={require("../../assets/images/orders.png")}
              color={color}
            />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name={Routes.profileStackScreen}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomTabIcon
              source={require("../../assets/images/profile.png")}
              color={color}
            />
          ),
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomTabNavigator;
