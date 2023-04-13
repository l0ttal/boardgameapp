import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { GAME_API_URL, GAME_CATEGORIES_URL } from './util';
import styles from './styles';

export default function GameGenres({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    setIsLoading(true);

    fetch(`${GAME_CATEGORIES_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data.categories);
        setIsLoading(false);
      })
      .catch((error) => console.error(`API categories fetch error: ${error}`));
  };

  const fetchGames = (categoryId) => {
    if (categoryId) {
      setIsLoading(true);

      fetch(`${GAME_API_URL}&categories=${categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          setGameData(data.games);
          setIsLoading(false);
        })
        .catch((error) => console.error(`API games fetch error: ${error}`));
    }
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
        <FlatList
          ListHeaderComponent={
            <>
              <FlatList
                data={categoryData}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.listContainer}>
                      <Pressable onPress={() => fetchGames(item.id)}>
                        <Text style={styles.h3}>
                          {item.name}{' '}
                          <Ionicons name="arrow-forward-outline" size={30} />
                        </Text>
                      </Pressable>
                    </View>
                  </>
                )}
                keyExtractor={(item, index) => index}
              />
            </>
          }
          data={gameData}
          renderItem={({ item }) => (
            <>
              <View style={styles.listContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('game', {
                      gameId: `${item.id}`,
                      prevScreen: 'genres',
                    })
                  }
                >
                  <Text style={styles.h3}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}
