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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var url = "https://stockviewer-331612.as.r.appspot.com/api/v2/details/";

  onChangeValueSearch = (text) => {
    getDataCompany(text);
  };

  const getDataCompany = async (text) => {
    try {
      const response = await fetch(`${url}${text}`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(alert("Không tìm thấy"));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataCompany();
  }, []);

};
