import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
// import { SearchBar } from "@rneui/themed";

const ChartScreen = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.root}>
<View style={styles.container}>
<View style={{flexDirection:'row',display: 'flex',justifyContent: 'center'}}>
<TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      placeholder={'Ma chung khoan'}
        // keyboardType="text"
      />
   <TouchableOpacity style={styles.button} >
  <Text>Tìm</Text>
</TouchableOpacity>
</View>
<View>
<Text  style={{fontSize:20, paddingLeft:10}}>HPG</Text>
<View style={{padding:20,backgroundColor:10, margin:10,shadowColor:'black',borderRadius:20}}> 
<Text>Công ty cổ Phần Tập Đoàn Hòa Phát (HBG)</Text>
<Text>Giá hiện tại:34894</Text>
<View style={{flexDirection:'row', justifyContent: 'space-between',}}>
<View style={{justifyContent:'space-around'}}>
<Text>P/e  5.7</Text>
<Text>EV/EVITA  5.7</Text>
</View>
<View style={{justifyContent:'space-around',marginRight: 50}}>
<Text>P/b: 6.1</Text>
<Text>EPS: 6.1</Text>
</View>
</View>
</View>
</View>
<Text>Khuyến nghị</Text>
<ScrollView>
  <View style={{display: 'flex', justifyContent:'space-around'}}>
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
  )
}

export default ChartScreen

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marfingTop:20,
  },
  input: {
    height: 40,
    width:'80%',
    // marginRight:80,
    borderWidth: 1,
    padding: 10,

  },
  button:{
    backgroundColor: '#0782F9',
    height:40,
    width:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    justifyContent:'space-around',
 display:'flex',
    backgroundColor:'#E3F2FD',
   margin:5,
    alignItems: 'center',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
  }
})