import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: "bold", fontSize:50,color:'#FF6624'}}>WIREFRAME</Text>
      </View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
        <View style={{ marginTop: 10, height: 45, flexDirection: "row", justifyContent: "center", alignItems: "center", width: 250, borderRadius: 10}}>
          <Text style={{ fontWeight: "bold", fontSize: 15,color:'black'}}>Xin chào!!! </Text>
        </View>
          <TouchableOpacity style={{ height: 45, flexDirection: "row", justifyContent: "center", alignItems: "center",marginBottom: 20, width: 250, borderRadius: 20, backgroundColor:"#ffecd7"}}>
         
            <Text style={{ fontWeight: "bold", fontSize: 15,color:'black'}}>{auth.currentUser?.email}</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSignOut}
          >
            <Text style={styles.textButton}>Logout 👋</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#F85F6A",
  },
  textButton:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",


  }
});
