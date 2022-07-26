import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../../firebase";

export default SignUp = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation(); // <-- Add this line
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  // const validateEmail = (mail) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(mail);
  // }

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Sign In:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const conditionCheckBox = () => {
    if (isChecked === true) {
      handleSignUp();
    } else {
      alert("Bạn chưa đồng ý với điều khoản của chúng tôi");
    }
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.signinText}>Sign Up</Text>
      <Text style={{ fontWeight: "100", marginTop: 5 }}></Text>
      <View>
        <Text style={styles.inputLable}>Email</Text>
        <TextInput
          type="email"
          style={styles.inputItem}
          placeholder="example@email.com"
          onChangeText={(text) => setEmail(text)}
          value={email}
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
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#F85F6A" : undefined}
          />

          <Text style={styles.label}>
            I agree to the
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {" "}
              Terms of Services{" "}
            </Text>
            and
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {" "}
              Privacy Policy{" "}
            </Text>
          </Text>
        </View>
        <View style={styles.viewButtonApp}>
          <TouchableOpacity
            style={styles.buttonSignin}
            onPress={conditionCheckBox}
          >
            <Text style={styles.textSigninButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "100",
            marginTop: 20,
            fontWeight: "bold",
            color: "#989EB1",
          }}
        >
          Have an Account?
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 5,
            color: "red",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
  },

  signinText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  tinyLogo: {
    width: 100,
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
  },
  viewButtonApp: {
    // inline the button
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonApp: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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
  textSigninButton: {
    fontWeight: "bold",
    color: "#fff",
  },
});
