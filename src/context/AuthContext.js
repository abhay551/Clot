import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../api/Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        console.log("token=" + storedToken);
        setIsLoggedIn(true);
        setToken(storedToken);
      }
    };
    checkLoginStatus();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      if (response.token) {
        await AsyncStorage.setItem("token", response.token);
        setIsLoggedIn(true);
        setToken(response.token);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setIsLoggedIn(false);
      setToken(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
