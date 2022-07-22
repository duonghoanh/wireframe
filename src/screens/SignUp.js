import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  CheckBox
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from 'react-native-check-box'
import React, { useState,useEffect } from "react";

import {auth} from "../../firebase";


const SignUp = (props) => {
  const navigation = useNavigation(); // <-- Add this line
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// const validateEmail = (mail) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(mail);
  // }

  const handleSignUp = () => { 
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Sign In:', user.email);
    })
    .catch(error => alert(error.message))
  }
  const [isSelected, setSelection] = useState(false);


  return (
    <View style={styles.viewContainer}>
      <Text style={styles.signinText}>Sign Up</Text>
      <Text style={{ fontWeight: "100", marginTop: 5 }}></Text>
      <View>
        <Text style={styles.inputLable}>Email</Text>
        <TextInput
          type="email"
          style={styles.inputItem}
          placeholder="Example@email.com"
          onChangeText={text => setEmail(text)}
          value={email}
    
        />
        <Text style={styles.inputLable}>Password</Text>
        <TextInput 
        secureTextEntry={true} 
        style={styles.inputItem}
        value={password}
        onChangeText={(text) => setPassword(text)}
         />
        <View style={styles.checkboxContainer}>


        <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"CheckBox"}
/>
          <Text style={styles.label}>
         
            I agree to the 
            <Text style={{ color: "red", fontWeight: "bold" }}> Terms of Services </Text>
            and
            <Text style={{ color: "red", fontWeight: "bold" }}> Privacy Policy </Text>
          </Text>
        </View>
        <View style={styles.viewButtonApp}>
          <TouchableOpacity
            style={styles.buttonSignin}
            onPress={handleSignUp}
           
          >
            <Text style={styles.textSigninButton} >Sign Up</Text>
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
        <Text style={{ fontWeight: "100", marginTop: 20,fontWeight:"bold",color:"#989EB1" }}>
          Have an Account?
        </Text>
          <Text  
          style={{ fontWeight: "bold", marginTop: 20, marginLeft: 5, color:'red' }}
          onPress={() => navigation.navigate('SignIn')}  
          >
          Sign in
          </Text>
      </View>
    </View>
  );
};

export default SignUp;

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
    height:50,
     width: "100%",
    justifyContent:"center",
    borderRadius:10,
   },
   textSigninButton:{
    fontWeight: "bold",
    color:"#fff",
  }
});
