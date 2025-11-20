import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function AvatarScreen() {
  const [seed, setSeed] = useState("Arpan");
  const [hair, setHair] = useState(["short01"]);
  const [flip, setFlip] = useState(false);

  const hairQuery = hair.join(",");

  const avatarUrl = `https://api.readyplayer.me/v1/users`;

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
        Choose Your Avatar
      </Text>

      {/* Avatar */}
      <View
        style={{
          width: 180,
          height: 180,
          borderRadius: 20,
          backgroundColor: "#f2f2f2",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Image
          source={{ uri: avatarUrl }}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </View>

      {/* Actions */}
      <TouchableOpacity
        onPress={() => setSeed(Date.now().toString())}
        style={{
          backgroundColor: "#007bff",
          padding: 12,
          borderRadius: 10,
          width: "60%",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Random Avatar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setHair(
            hair[0] === "short01"
              ? ["long01", "long02"]
              : ["short01", "short02"]
          )
        }
        style={{
          backgroundColor: "#28a745",
          padding: 12,
          borderRadius: 10,
          width: "60%",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Change Hair</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setFlip(!flip)}
        style={{
          backgroundColor: "#ff9900",
          padding: 12,
          borderRadius: 10,
          width: "60%",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Flip Avatar</Text>
      </TouchableOpacity>
    </View>
  );
}
