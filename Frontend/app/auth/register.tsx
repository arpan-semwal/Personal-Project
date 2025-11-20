import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
export default function Register() {
  const router = useRouter();
  const [hobby, setHobby] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1}}>Name</Text>
      <TextInput placeholder="John Doe" style={styles.input} />
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1}}>Email</Text>
      <TextInput placeholder="example@gmail.com" style={styles.input} />
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1 }}>Password</Text>
      <TextInput placeholder="qqz@123" secureTextEntry style={styles.input} />
       <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1 }}>Confirm Password</Text>
      <TextInput
        placeholder="qqz@123"
        secureTextEntry
        style={styles.input}
      />
        <Text style={{ marginTop: 1, fontWeight: "600" , marginBottom:1 }}>Select Your Hobby</Text>
         
      <View
      
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          paddingHorizontal: 10,
        height: 55,
          
        }}
      >
       

        <Picker
          selectedValue={hobby}
          onValueChange={(itemValue) => setHobby(itemValue)}
          style={{
            height: 55, // important for visible area
            width: "100%", // fill the container
          }}
        >
          <Picker.Item label="Game" value="Game" />
          <Picker.Item label="Cycle" value="Cycle" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/avatar")}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <Text>Already have an Account?</Text>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={{ color: "#0066ff", fontWeight: "600" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: { color: "white", fontWeight: "700" },
});
