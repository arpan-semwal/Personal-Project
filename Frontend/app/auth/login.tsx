import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1}}>Email</Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1}}>Password</Text>
      <TextInput placeholder="qqz@123" secureTextEntry style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/avatar")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
        <Text>Dont have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={{ color: "#0066ff", fontWeight: "600" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#0b84ff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: { color: "white", fontWeight: "700" },
});
