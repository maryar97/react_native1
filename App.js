import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {axios.get('https://127.0.0.1:8000/api/categories')
    .then((res) => setData(res.data))
    .catch((e) => console.log(e.message))
  },[])
  return (
    <View style={styles.container}>
      {data.map((d,k) => (
        <Text key={k}>{d.nomcat}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});