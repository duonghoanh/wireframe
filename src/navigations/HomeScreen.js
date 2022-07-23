import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import firebase from "firebase/app";
// import database from '@react-native-firebase/database';
import "firebase/functions";
import "firebase/storage";
import { auth } from "../../firebase";

const HomeScreen = () => {
  getData = () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const ref = database.ref(`/data.data/${uid}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.setState({
        data: data.data,
      });
    });
  };

  const getLables = () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const ref = database.ref(`/data/${uid}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data.lables);
      this.setState({
        data: data.labels,
      });
    });
  };

  //   useEffect(() => {
  //     database()
  //     .ref('/data/')
  //     .once('value')
  //     .then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //       const reference = database().ref('/users/123');

  //   })

  Math.random();
  var theRandomNumber = Math.floor(Math.random() * 9999) + 1;

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    setCurrentDate(
      hours + ":" + min + ":" + sec + " " + date + "/" + month + "/" + year
    );
  }, []);

  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: { getLables },

    datasets: [
      {
        data: [0, 1, 2, 3, 4, 5, 6, 7],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["VNIndex"], // optional
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#e3f2fd",
    backgroundGradientTo: "#e3f2fd",
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 0.5) => `#fff`,
    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    style: {
      borderRadius: 5,
    },
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#376F52",
    },
  };

  let array = [
    {
      id: 1,
      name: "VNiNdex",
    },
    {
      id: 2,
      name: "Vn30",
    },
    {
      id: 3,
      name: "VnMidCap",
    },
    {
      id: 4,
      name: "APS",
    },
    {
      id: 5,
      name: "LPB",
    },
    {
      id: 6,
      name: "AMV",
    },
    {
      id: 7,
      name: "HPG",
    },
    {
      id: 8,
      name: "SHB",
    },
    {
      id: 9,
      name: "TNG",
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            {array.map((v) => {
              return (
                <View style={styles.viewItem}>
                  <TouchableOpacity>
                    <LineChart
                      data={{
                        labels: [
                          "11/7",
                          "12/7",
                          "13/7",
                          "14/7",
                          "15/7",
                          "16/7",
                          "17/7",
                          "18/7",
                          "19/7",
                        ],
                        datasets: [
                          {
                            data: [
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                              Math.random() * v?.id * 100,
                            ],
                          },
                        ],
                        legend: [v?.name],
                      }}
                      width={screenWidth}
                      height={200}
                      chartConfig={chartConfig}
                      yAxisInterval={5} // optional, defaults to 1
                      // bezier
                      style={{
                        borderRadius: 8,
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={{ marginTop: 10, marginLeft: 10 }}>
                    Gần nhất {theRandomNumber} lúc {currentDate}{" "}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  viewItem: {
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 5,
    backgroundColor: "#fff",
    paddingBottom: 25,
    marginBottom: 20,
  },
});
