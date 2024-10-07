import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa NavigationContainer
import TabNavigator from '../TravelSV/Screens/TabNavigator'; // Importa el TabNavigator

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";




const Stack = createNativeStackNavigator();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function CreateAccountScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("acount created");
        Alert.alert("Success", "Account created successfully");
        alert("Account created successfully");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", error.message);
        alert("Error", "usuario o contraseña incorrecta");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.tema}>Create Account</Text>
        <Text style={styles.TextInput}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.formularioInput}
        />
        <Text style={styles.TextInput}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.formularioInput}
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={styles.buttonCreate}
          >
            <Text style={{ color: "white" }}>Create acount</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "blue" }}>back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  

  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("login successful");
        Alert.alert("Success", "Login successful");
        alert("Login successful");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", error.message);
        alert("Error", "usuario o contraseña incorrecta");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.tema}>Login Screen</Text>
        <Text style={styles.TextInput}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.formularioInput}
        />
        <Text style={styles.TextInput}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.formularioInput}
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
            style={styles.buttonCreate}
          >
            <Text style={{ color: "white" }}>Create acount</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tema: {
    fontSize: 30,
    marginBottom: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  formulario: {
    width: "80%",
    backgroundColor: "#7ef0fc",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0px 0px 10px 5px #096873",
    
  },
  TextInput: {
    fontSize: 20,
    marginBottom: 5,
  },

  formularioInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonCreate: {
    backgroundColor: "#1500ff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonLogin: {
    backgroundColor: "#7fe700",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
});






 