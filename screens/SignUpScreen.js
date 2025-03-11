import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import API from "../axios"; // Import axios instance
import axios from 'axios'
export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {
//     console.log("working")
//     if (!name || !email || !password || !confirmPassword) {
//       alert("Please fill all fields!");
//     }
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//     }
//     console.log("working2")
//     // axios.post("http://localhost:5000/auth/register", { name, email, password });
//     console.log("working3")

//     try {
//     console.log("working4")

//       axios.post("http://localhost:5000/auth/register");
// console.log("working5")

//       alert(response.data.message || "Signup successful!");
      
//     } catch (error) {
//       alert(error.response?.data?.error || "Signup failed!");
//     } finally {
//       setLoading(false);
      
//     }
//   };
const handleRegister = async ()=>{
  try{
     await axios.post("http://localhost:5000/api/auth/register")
  }catch(error){
    console.log(error)
  }
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput label="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />
      
      <Button  onPress={()=>handleRegister()} >
        dfddsds
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
