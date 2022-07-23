import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Touchable,
} from "react-native";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import { auth } from "../../firebase";
import { NavigationContainer } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "@rneui/base";

const SignIn = () => {
  const navigation = useNavigation(); // <-- Add this line
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Log in with ", user.email);
      })
      // .catch((error) => alert(error.message));
      .catch((error) => alert("Sai mail hoặc mật khẩu"));
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("NavigationScreen");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewImageSignin}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/cloud-trans.png")}
        />
        <Text style={styles.companyName}>Company Name</Text>
      </View>
      <Text style={styles.signinText}>Sign In</Text>
      <Text style={{ fontWeight: "100", marginTop: 5, color: "#ABB5BE" }}>
        Hi there, nice to see you again.
      </Text>
      <View>
        <Text style={styles.inputLable}>Email</Text>
        <TextInput
          type="email"
          style={styles.inputItem}
          placeholder="example@email.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.inputLable}>Password</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 8 }}>
            <TextInput
              secureTextEntry={hidePass ? true : false}
              style={styles.inputItem}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <MaterialCommunityIcons
              name={hidePass ? "eye-off" : "eye"}
              size={30}
              color="#d1d6db"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
        </View>
        <View style={styles.viewButtonApp}>
          <TouchableOpacity style={styles.buttonSignin} onPress={handleLogin}>
            <Text style={styles.textSigninButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
            color: "#989EB1",
          }}
        >
          or you one of social profile.
        </Text>
      </View>
      <View style={styles.viewButtonApp}>
        <TouchableOpacity style={styles.buttonAppTweeter}>
          <Text style={styles.textSigninButton}>Tweeter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAppFacebook}
          // onPress={onPressLearnMore}
        >
          <Text style={styles.textSigninButton}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontWeight: "bold", marginTop: 20, color: "#989EB1" }}>
          Forgot your password
        </Text>
        <TouchableOpacity
          style={{ fontWeight: "100", marginTop: 20, color: "red" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ fontWeight: "bold", color: "#F85F6A" }}> Sign up</Text>
          {/* {SignUp} */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: "5%",
    marginLeft: "10%",
    marginRight: "10%",
    color: "black",
  },
  viewImageSignin: {
    alignItems: "center",
    justifyContent: "center",
  },
  signinText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  tinyLogo: {
    width: 140,
    height: 100,
    marginTop: 20,
  },
  inputLable: {
    marginTop: 10,
    marginBottom: 1,
    color: "#F85F6A",
    marginTop: 5,
  },
  inputItem: {
    marginTop: 10,
    marginBottom: 5,
    paddingTop: 0,
    borderBottomColor: "#000", // Add this to specify bottom border color
    borderBottomWidth: 1, // Add this to specify bottom border width
    color: "#000",
  },
  viewButtonApp: {
    // inline the button
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  buttonSignin: {
    alignItems: "center",
    backgroundColor: "#F85F6A",
    height: 50,
    width: "100%",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonAppTweeter: {
    alignItems: "center",
    backgroundColor: "#1DA1F2",
    height: 50,
    width: "47%",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonAppFacebook: {
    alignItems: "center",
    backgroundColor: "#3B5998",
    height: 50,
    width: "47%",
    justifyContent: "center",
    borderRadius: 10,
  },
  companyName: {
    fontWeight: "bold",
    color: "#ABB5BE",
  },
  textSigninButton: {
    fontWeight: "bold",
    color: "#fff",
  },
});
