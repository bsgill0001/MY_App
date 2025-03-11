import React, { useEffect, useRef } from "react";
import { View, Text, FlatList, StyleSheet, Animated, ImageBackground } from "react-native";

const courses = [
  { id: "1", title: "React Native Basics", progress: 70 },
  { id: "2", title: "Advanced JavaScript", progress: 50 },
  { id: "3", title: "MongoDB & Node.js", progress: 30 },
];

const DashboardScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground source={require("../assets/photo3.jpeg")} style={styles.background}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.heading}>Welcome to Dashboard</Text>

        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseCard}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <View style={styles.progressBar}>
                <Animated.View style={[styles.progressFill, { width: '${item.progress}%' }]} />
              </View>
            </View>
          )}
        />
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00e6e6",
    textAlign: "center",
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#00e6e6",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#00e6e6",
    borderRadius: 5,
  },
});

export default DashboardScreen;
