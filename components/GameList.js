import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { GAME_API_URL } from './util';
import styles from './styles';

export default function GameList({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    setIsLoading(true);

    fetch(`${GAME_API_URL}&limit=50`)
      .then((response) => response.json())
      .then((data) => {
        setGameList(data.games);
        setIsLoading(false);
      })
      .catch((error) => console.error(`API fetch error: ${error}`));
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {gameList && (
          <FlatList
            data={gameList}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <Text
                  style={styles.h3}
                  onPress={() =>
                    navigation.navigate('game', {
                      gameId: `${item.id}`,
                      prevScreen: 'games',
                    })
                  }
                >
                  {item.name}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
