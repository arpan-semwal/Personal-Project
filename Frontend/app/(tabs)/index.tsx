import { Redirect } from "expo-router";
import { View } from "react-native";
import Login from "../auth/login";
import Register from "../auth/register";

// /app/(tabs)/index.tsx
export default function index(){
    return(
       <Register/>
    )
}