import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const showPass = () => {
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 8}}>
          <TextInput
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry={hidePass ? true : false}
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
    </View>
  );
};

export default showPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
