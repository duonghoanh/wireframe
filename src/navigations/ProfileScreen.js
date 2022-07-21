import { StyleSheet,View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import {auth} from "../../firebase";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace('SignIn')
    })
    .catch(error => alert(error.message))
    }
  return (
 <View>
  <Text>
  Hello {auth.currentUser?.email}
  </Text> 
<TouchableOpacity style={{ backgroundColor:"pink"}} onPress={handleSignOut}>
  <Text>
  Logout
  </Text>
</TouchableOpacity>
 </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})