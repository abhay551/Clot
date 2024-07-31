import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/splash/Splash";
import BottomTabNavigator from "./navigator/BottomTabNavigator";
import AuthNavigator from "./navigator/AuthNavigator";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CategoriesProvider } from "./context/CategoryContext";

const AppContent = () => {
  const [isAppReady, setAppReady] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isAppReady && <Splash onFinish={() => setAppReady(true)} />}
      {isAppReady && (
        <NavigationContainer>
          {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <AppContent />
      </CategoriesProvider>
    </AuthProvider>
  );
};

export default App;
