import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

const ChartScreen = () => {
  // const [valueSearch, onChangeValueSearch] = useState('');
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

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeValueSearch}
            // value={valueSearch}
            placeholder={"Mã chứng khoáng..."}
            keyboardType="text"
          />
          <TouchableOpacity style={styles.button}   onPress={() => getDataCompany} >
  
  <Text>Tìm</Text>
</TouchableOpacity>
        </View>
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={[data]}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View>
                  <Text
                    style={{ fontSize: 20, marginTop: 10, marginBottom: 5 }}
                  >
                    {item.ticker}
                  </Text>
                  <View style={styles.viewBigItem}>
                    <Text style={styles.textBigItem}>
                      {item.name}
                      <Text> ({item.ticker})</Text>
                    </Text>
                    <Text style={styles.textBigItem}>
                      Giá hiện tại: {item.price}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ justifyContent: "space-around" }}>
                        <Text style={styles.textBigItem}>P/e {item.price}</Text>
                        <Text style={styles.textBigItem}>
                          EV/EVITA {item.evebida}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "space-around",
                          marginRight: 50,
                        }}
                      >
                        <Text style={styles.textBigItem}>P/b: {item.pb}</Text>
                        <Text style={styles.textBigItem}>EPS: {item.eps}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          )}
        </ScrollView>

        <Text style={{ marginTop: 15, marginBottom: 10, fontSize: 15 }}>
          Khuyến nghị
        </Text>
        {/* <ScrollView>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              style={styles.viewItem}
              data={data.suggestions}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.lineTextItem}>
                    VNDirect lúc: {item.source}
                  </Text>
                  <Text style={styles.lineTextItem}>
                    Giá mục tiêu: {item.targetPrice}
                  </Text>
                </View>
              )}
            />
          )}
        </ScrollView> */}
        <ScrollView>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
     {
      data?.suggestions?.map((item, index) => {
        return (
          <View style={styles.item}>
          <Text style={styles.lineTextItem}>
                    VNDirect lúc: {item.source}
                  </Text>
                  <Text style={styles.lineTextItem}>
                    Giá mục tiêu: {item.targetPrice}
                  </Text>
            </View>
        )
     }
     )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChartScreen;

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
    width: "47%",
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
    // width: "100%",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#E3F2FD",

    flexDirection: "row",
  },
  lineTextItem: {
    padding: 5,
    flex:1,
  },
});
