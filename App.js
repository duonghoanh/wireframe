import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavigationScreen from "./src/screens/NavigationScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn.js";
import SignUp from "./src/screens/SignUp.js";
import AdviceScreen from "./src/navigations/AdviceScreen.js";
import ProfileScreen from "./src/navigations/ProfileScreen.js";
import HomeScreen from "./src/navigations/HomeScreen.js";
import ChartScreen from "./src/navigations/ChartScreen.js";
import ChartAPI from "./src/api/ChartAPI.js";
import showPass from "./src/components/showPass.js";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
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
});
