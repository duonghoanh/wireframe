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