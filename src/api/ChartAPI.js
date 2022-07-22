import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import axios from "axios";
import { parse } from "uuid";
// import { SearchBar } from "@rneui/themed";
export default ChartAPI = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://stockviewer-331612.as.r.appspot.com/api/v2/details/klc"
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={"Ma chung khoan"}
            // keyboardType="text"
          />
          <TouchableOpacity style={styles.button}>
            <Text>Tìm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 20, paddingLeft: 10 }}>HPG</Text>
          <View
            style={{
              padding: 20,
              backgroundColor: 10,
              margin: 10,
              shadowColor: "black",
              borderRadius: 20,
            }}
          >
            <Text>Công ty cổ Phần Tập Đoàn Hòa Phát (HBG)</Text>
            <Text>Giá hiện tại:34894</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ justifyContent: "space-around" }}>
                <Text>P/e 5.7</Text>
                <Text>EV/EVITA 5.7</Text>
              </View>
              <View style={{ justifyContent: "space-around", marginRight: 50 }}>
                <Text>P/b: 6.1</Text>
                <Text>EPS: 6.1</Text>
              </View>
            </View>
          </View>
        </View>
        <Text>Khuyến nghị</Text>
        <ScrollView>
          <View
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
            <View style={styles.item}>
              <Text>VNDirect lúc: 3.52</Text>
              <Text>Giá mục tiêu 51.000</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 40,
    width: "85%",
    // marginRight:80,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    height: 40,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  viewBigItem: {
    padding: 20,
    backgroundColor: 10,
    shadowColor: "black",
    borderRadius: 5,
    backgroundColor: "#E3F2FD",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  textBigItem: {
    margin: 5,
    flexWrap: "wrap",
  },
  item: {
    backgroundColor: "#E3F2FD",
    margin: 5,
    maxWidth: "48%",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
  },
  viewItem: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  lineTextItem: {
    padding: 5,
  },
});
