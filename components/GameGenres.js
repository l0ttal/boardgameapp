import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';
import styles from './Styles.js';

export default function GameGenres() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.geekdo.com/xmlapi/search?search=battle%20wizards')
      .then((response) => response.text())
      .then((data) => {
        parser.parseString(data, (err, result) => {
          if (err) {
            console.error(`XML parse error: ${err}`);
          } else {
            setGameList(result.boardgames.boardgame);
            setIsLoading(false);
          }
        });
      })
      .catch((err) => console.error(`API fetch error: ${err}`));
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Fantasy</Text>
      <Text style={styles.h1}>Sci-fi</Text>
      <FlatList
        data={gameList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name[0]._}</Text>
          </View>
        )}
        keyExtractor={(item) => item.$.objectid}
      />
    </View>
  );
}
