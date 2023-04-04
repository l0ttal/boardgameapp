import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';

import { GAME_API_URL, randomGameIds } from './util';

export default function GameGenres({ route, navigation }) {
  const theme = route.params.theme;

  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    setIsLoading(true);

    randomGameIds().forEach((gameId) => {
      fetch(`${GAME_API_URL}/boardgame/${gameId}`)
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
    });
  };

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
        {gameList && (
          <FlatList
            data={gameList}
            renderItem={({ item }) => {
              const categoryObjects = item.boardgamecategoryObjects;
              if (categoryObjects) {
                const categories = categoryObjects.map((obj) => obj['_']);
                console.log(categoryObjects);
                // return (
                //   <Text
                //     style={theme.h1}
                //     onPress={() =>
                //       navigation.navigate('GenreResult', {
                //         screen: 'GenreResult',
                //         game: item,
                //       })
                //     }
                //   >
                //     Fantasy
                //   </Text>
                // );
              }
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
