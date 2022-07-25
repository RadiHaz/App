import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [hiddenPass, setHiddenPass] = useState(true);
  const [source, setSource] = useState(
    require("../assets/images/eye-off-outline.png")
  );

  const createAlert = () =>
    Alert.alert(
      "Credenciais Inválidas",
      "Email ou pass inválidos, favor verificar e preencher corretamnente",
      [
        {
          text: "Ok",
          style: "destructive",
        },
      ]
    );

  function loginHandler() {
    if (!email || !pass) {
      return createAlert();
    }
    return switchPage();
  }

  function switchPage() {
    return navigation.navigate("Home");
  }

  function toggleHiddenPass() {
    if (hiddenPass) {
      setHiddenPass(false);
      setSource(require("../assets/images/eye-outline.png"));
    } else {
      setHiddenPass(true);
      setSource(require("../assets/images/eye-off-outline.png"));
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputHeader}>
        <Image
          style={styles.image}
          source={require("../assets/images/ico.png")}
        />
        <Text style={styles.boldText}>LOGIN</Text>
        <Text style={{ fontWeight: "bold" }}>
          Insira seus dados para continuar
        </Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>EMAIL</Text>
        <TextInput
          style={styles.TextInput}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>SENHA</Text>
        <TouchableOpacity style={styles.eye} onPress={toggleHiddenPass}>
          <Image source={source} />
        </TouchableOpacity>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={hiddenPass}
          value={pass}
          onChangeText={(pass) => setPass(pass)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "35%",
  },

  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },

  inputHeader: {
    width: "70%",
    height: 125,
    marginBottom: 20,
  },

  image: {
    marginBottom: 10,
    height: 50,
    width: 50,
    borderRadius: 5,
  },

  inputTitle: {
    color: "#CB3BE6",
    fontWeight: "bold",
  },

  inputView: {
    width: "70%",
    height: 50,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "grey",
  },

  TextInput: {
    height: 40,
    marginEnd: 20,
  },

  eye: {
    flex: 1,
    alignSelf: "flex-end",
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#CB3BE6",
  },

  loginText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});
