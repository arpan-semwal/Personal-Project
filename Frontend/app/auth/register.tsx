import { useRouter } from "expo-router";
import { View , Text, TextInput, TouchableOpacity  , StyleSheet, Alert} from "react-native";

export default function Register(){

    const router = useRouter();
    return(
       <View style={styles.container}>
        <Text  style={styles.title}>Register</Text>
        

        <TextInput placeholder="Name" style={styles.input}/>
        <TextInput placeholder="Email"  style={styles.input}/>
        <TextInput placeholder="Password" secureTextEntry  style={styles.input}/>
        <TextInput placeholder="Confirm Password" secureTextEntry  style={styles.input}/>
        <TouchableOpacity  style={styles.button} onPress={() => router.push("/(tabs)/avatar")}>
            <Text>Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection:"row", justifyContent:"center", marginTop:16}}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
                <Text style={{color:"#0066ff" , fontWeight:"600"}}>Login</Text>
            </TouchableOpacity>
        </View>
       </View>
    )
}




const styles = StyleSheet.create({
container:{flex:1 , padding:20 , justifyContent:"center"},
title:{ fontSize:28 , fontWeight:"700", marginBottom:20 , textAlign:"center"   },
input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:12,
    borderRadius:10,
    marginBottom:12,
},
button:{
    backgroundColor:"#28a745",
    padding:14,
    borderRadius:10,
    alignItems:"center",
    marginTop:6
},
buttonText:{color:"white" , fontWeight:"700"}
})