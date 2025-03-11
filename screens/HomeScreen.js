import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <ImageBackground source={require("../assets/photo2.jpg")} style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Enter personal details to your account</Text>

      {/* ✅ Explore Button - Now Navigates Properly */}
      <TouchableOpacity
        style={[styles.darkButton, styles.exploreButton, activeButton === "Explore" && styles.activeButton]}
        onPress={() => {
          setActiveButton("Explore");
          navigation.navigate("Explore");  // ✅ Now Navigates Correctly
        }}
      >
        <Text style={[styles.buttonText, activeButton === "Explore" && styles.activeText]}>Explore</Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.darkButton, activeButton === "SignIn" && styles.activeButton]}
          onPress={() => {
            setActiveButton("SignIn");
            navigation.navigate("SignIn");
          }}
        >
          <Text style={[styles.buttonText, activeButton === "SignIn" && styles.activeText]}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.darkButton, activeButton === "SignUp" && styles.activeButton]}
          onPress={() => {
            setActiveButton("SignUp");
            navigation.navigate("SignUp");
          }}
        >
          <Text style={[styles.buttonText, activeButton === "SignUp" && styles.activeText]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 40,
  },
  darkButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#142850",
    marginHorizontal: 5,
  },
  exploreButton: {
    position: "absolute",
    bottom: 120, // Sign in/Sign up se thoda upar
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "white",
  },
  activeText: {
    color: "#142850",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
