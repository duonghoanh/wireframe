import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import AdviceAPI from "../api/AdviceAPI";

const AdviceScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://stockviewer-331612.as.r.appspot.com/api/v2/suggestion/today?fbclid=IwAR0bhzE1zTdhXStFM8P0ipQxOiNQsImRYn9SjGQuMn6rM7O2qTtkEMqIFh8"
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
        <Text style={{ fontSize: 20, marginLeft: 5, marginBottom: 5 }}>
          Khuyến nghị gần nhất
        </Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{ marginBottom: 25 }}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.viewItem}>
                <View style={styles.lineTextItem}>
                  <Text style={{ alignItem: "flex-start", fontWeight: "bold" }}>
                    {item.ticker}
                  </Text>
                  <Text style={styles.colunmRightLineTextItem}>
                    Giá hiện tại: <Text>{item.price}</Text>{" "}
                  </Text>
                </View>
                <View style={styles.lineTextItem}>
                  <Text style={styles.colunmLeftLineTextItem}>
                    Định giá theo thị trường hiện tại:
                  </Text>
                  <Text style={styles.colunmRightLineTextItem}>
                    {item["1ytargetPrice"]} <Text>({item["1yReturn"]})%</Text>
                  </Text>
                </View>
                <View style={styles.lineTextItem}>
                  <Text style={styles.colunmLeftLineTextItem}>
                    Định giá theo 5 năm:
                  </Text>
                  <Text style={styles.colunmRightLineTextItem}>
                    {item["5yTargetPrice"]} <Text>({item["5yReturn"]})%</Text>
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AdviceScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    margin: 10,
    marginTop: 50,
  },
  viewItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#E3F2FD",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  lineTextItem: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  colunmRightLineTextItem: {
    alignItem: "flex-end",
  },
  colunmLeftLineTextItem: {
    alignItem: "flex-start",
  },
});
