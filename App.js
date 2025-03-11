import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ExploreScreen from "./screens/ExploreScreen";

const Stack = createStackNavigator();

// Splash Screen ko initially visible rakho
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require("./assets/photo1.jpg")} style={styles.splashImage} />
        <Text style={styles.splashText}>E-Learning</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Dashboard">
              {(props) => <DashboardScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignIn">
              {(props) => <SignInScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Explore" component={ExploreScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  splashImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  splashText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0DFF92",
    position: "absolute",
    bottom: 100,
  },
});
