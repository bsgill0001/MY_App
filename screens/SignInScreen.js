import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import API from "../axios"; // Import axios instance

export default function SignInScreen({ navigation, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/auth/signin", { email, password });

      alert('Welcome, ${response.data.user.name}!');
      setIsLoggedIn(true);
      navigation.replace("Dashboard");
    } catch (error) {
      alert(error.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      
      <Button mode="contained" onPress={handleLogin} loading={loading} disabled={loading} style={styles.button}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { marginBottom: 10 },
  button: { marginTop: 10 },
});
