// import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
// import React,{useState,useEffect} from 'react'
// import { Dimensions } from "react-native";
// import axios from 'axios';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";
// export default CallAPI = () => {
//   const [chart, setChart] = useState([])

// const [data, setData] = useState({});
// const [loadings, setLoading] = useState(true)
// const url= 'https://stockviewer-331612.as.r.appspot.com/api/v2/details/ocb';


// const getDataUsingSimpleGetCall = () => {
//   axios
//     .get('https://stockviewer-331612.as.r.appspot.com/api/v2/details/ocb')
//     .then(function (response) {
//       // handle success
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       // handle error
//       alert(error.message);
//     })
//     .finally(function () {
//       // always executed
//       alert('Finally called');
//     });

//   }
// return (
// <View style={styles.container}>
// <TouchableOpacity
//         style={styles.buttonStyle} 
//         onPress={getDataUsingSimpleGetCall} >
//         <Text>Multiple Concurrent Requests In Single Call</Text>
//       </TouchableOpacity>
// </View>
//   )

// }
// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// buttonStyle: {
//   alignItems: 'center',
//   backgroundColor: '#DDDDDD',
//   padding: 10,
//   width: '100%',
//   marginTop: 16,
// }
// }); 
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
function  AdviceAPI(){

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const getMovies = async () => {
   try {
    const response = await fetch('https://stockviewer-331612.as.r.appspot.com/api/v2/suggestion/today?fbclid=IwAR0bhzE1zTdhXStFM8P0ipQxOiNQsImRYn9SjGQuMn6rM7O2qTtkEMqIFh8');
    const json = await response.json();
    setData(json.data);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  getMovies();
}, []);
return {
  data:[data,setData],
  isLoading:[isLoading,setLoading]
}
}
export default AdviceAPI