import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";
import HomeScreen from "../navigations/HomeScreen.js"
import ProfileScreen from "../navigations/ProfileScreen.js";
import ChartScreen from "../navigations/ChartScreen.js";
import AdviceScreen from "../navigations/AdviceScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NavigationScreen() {
  const Stack = createBottomTabNavigator();
  return (
    // < independent={true}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor: "#FF6624",
          headerShown: false,
          activeTintColor: "red",
          inactiveTintColor: "#DEE2E6",
          tabBarStyle: {
            backgroundColor: "#F7F6F6",
            borderTopWidth: 0,
            borderTopColor: "#000",
            borderTopStyle: "solid",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
        
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
          tabBarLabel: 'Chart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-box" color={color} size={size} />
          ),
          }}
        />
        <Stack.Screen name="Advice" component={AdviceScreen} 
             options={{
          tabBarLabel: 'advice',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          ),
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}
           options={{
          tabBarLabel: 'account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          ),
          }}
           />
      </Stack.Navigator>
    
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
