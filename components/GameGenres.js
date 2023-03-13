import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './Styles.js';

export default function GameGenres() {
  const [gameList, setGameList] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     'https://open-api.myhelsinki.fi/v2/places/?tags_filter=main:490,sub:180,sub:68'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setGameList(data.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>This is the genres page</Text>
    </View>
  );
}
