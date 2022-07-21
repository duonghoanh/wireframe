import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React,{ useState, useEffect} from 'react'
import { Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";
import firebase from 'firebase/app'
// import database from '@react-native-firebase/database';
import "firebase/functions";
import "firebase/storage";
import {auth} from "../../firebase";

const HomeScreen = () => {

getData=() => {
  const user = auth.currentUser;
  const uid = user.uid;
  const ref = database.ref(`/data.data/${uid}`);
  ref.on('value', snapshot => {
    const data = snapshot.val();
    console.log(data);
    this.setState({
      data: data.data,
    });
  }
  );
}

const getLables=()=> {
  const user = auth.currentUser;
  const uid = user.uid;
  const ref = database.ref(`/data/${uid}`);
  ref.on('value', snapshot => {
    const data = snapshot.val();
    console.log(data.lables);
    this.setState({
      data: data.labels,
    });
  }
  );
}

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

  const [currentDate, setCurrentDate] = useState('');
 
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    setCurrentDate( 

      hours + ':' + min + ':' + sec
      + ' ' +  date + '/' + month + '/' + year 
     
    );
  }, []);

  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels:{getLables},

    datasets: [
      {
        data: [
          0,1,2,3,4,5
          ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["VNIndex"] // optional
  };

  const chartConfig={
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#E3F2FD",
    backgroundGradientTo: "#1DA1F2",
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    style: {
      borderRadius: 16,
      marginRight:1
    },
    propsForDots: {
      r: "2",
      strokeWidth: "3",
      stroke: "#376F52"
    }
  }

  let array=[
    {
      id:123,
      name:'VNiNdex'
    },{
      id:321,
      name:'Vn30'
    },
	{
		id:323331,
		name:'Vn301'
	  },
	  {
		id:3321,
		name:'Vn22230'
	  }
  ]

  return (
<ScrollView>

  <View style={styles.viewItem}>
  {
    array.map(v=>{
      return   <>
      <TouchableOpacity>
	  <LineChart
     data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random()  * v?.id * 100,
            Math.random() * v?.id  * 100,
            Math.random() * v?.id * 100,
            Math.random() * v?.id * 100,
            Math.random() *v?.id * 100,
            Math.random() *v?.id * 100
          ]
        }
      ],
	  legend:[v?.name]
    }}
	width={screenWidth}
	height={220}
	chartConfig={chartConfig}

	
		yAxisLabel="$"
		yAxisSuffix="k"
		yAxisInterval={1} // optional, defaults to 1
	
		// bezier
		style={{
		marginVertical: 8,
		borderRadius: 16
		}}
  />
  </TouchableOpacity>
    <Text style={{marginBottom:2, marginLeft:10}}>Gần nhất {theRandomNumber} luc {currentDate} </Text>
	  </>
    })
  }
  

  </View>


 
</ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewItem: {
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
backgroundColor: "#E3F2FD",
  }
})
