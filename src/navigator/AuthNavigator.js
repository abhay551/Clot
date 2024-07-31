import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/authentication/SignIn";
import SignInPassword from "../screens/authentication/SignInPassword";
import CreateAccount from "../screens/authentication/CreateAccount";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import Routes from "../constants/Routes";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.signIn}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={Routes.signIn} component={SignIn} />
      <AuthStack.Screen
        name={Routes.signInPassword}
        component={SignInPassword}
      />
      <AuthStack.Screen name={Routes.createAccount} component={CreateAccount} />
      <AuthStack.Screen
        name={Routes.forgotPassword}
        component={ForgotPassword}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
