import React, { useEffect, useRef } from "react";
import { View, ImageBackground, Text, Animated, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Floating Animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Color Animation
    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();

    // Navigate to Home Screen after 3 sec
    setTimeout(() => {
      navigation.replace("Home");
    }, 2500);
  }, []);

  // Interpolating color from blue to red
  const textColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#1E90FF", "#FF4500"], // Blue to Orange-Red
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/photo1.jpg")}
        style={styles.background}
      >
        <Animated.Text style={[styles.text, { transform: [{ translateY: floatAnim }], color: textColor }]}>
          E-Learning
        </Animated.Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default SplashScreen;
