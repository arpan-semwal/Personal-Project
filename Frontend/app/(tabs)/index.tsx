import { Redirect } from "expo-router";
import { View } from "react-native";
import Login from "../auth/login";

// /app/(tabs)/index.tsx
export default function index(){
    return(
       <Login/>
    )
}