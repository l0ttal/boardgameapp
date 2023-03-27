import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';

import styles from './Styles';

export default function GameGenres(props) {
  const theme = props.route.params.theme;

  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.geekdo.com/xmlapi/search?search=battle%20wizards')
      .then((response) => response.text())
      .then((data) => {
        parser.parseString(data, (error, result) => {
          if (error) {
            console.error(`XML parse error: ${error}`);
          } else {
            setGameList(result.boardgames.boardgame);
            setIsLoading(false);
          }
        });
      })
      .catch((error) => console.error(`API fetch error: ${error}`));
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={theme.container}>
        <View style={theme.textContainer}>
          <Text style={theme.text}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <Text style={theme.h1}>Fantasy</Text>
        <Text style={theme.h1}>Sci-fi</Text>
        <FlatList
          data={gameList}
          renderItem={({ item }) => (
            <View style={theme.listContainer}>
              <Text style={theme.text}>{item.name[0]._}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}
