import React, { useEffect, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ExploreScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const allCourses = [
    { id: "1", title: "React Native Basics" },
    { id: "2", title: "Advanced JavaScript" },
    { id: "3", title: "Node.js & MongoDB" },
    { id: "4", title: "Full-Stack Web Dev" },
    { id: "5", title: "Python for AI" },
  ];

  return (
    <LinearGradient colors={["#0f0f0f", "#1a1a1a"]} style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Explore Courses
      </Animated.Text>

      <FlatList
        data={allCourses}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <TouchableOpacity
              style={styles.enrollButton}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.enrollText}>Sign In to Enroll</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, color: "#0ff", textAlign: "center", marginTop: 30 },
  courseCard: { backgroundColor: "#222", padding: 15, borderRadius: 10, marginVertical: 10 },
  courseTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  enrollButton: { backgroundColor: "#0ff", padding: 8, borderRadius: 5, marginTop: 5 },
  enrollText: { color: "#000", textAlign: "center", fontWeight: "bold" },
});

export default ExploreScreen;
