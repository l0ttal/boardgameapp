import { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue } from 'firebase/database';

import {
  GAME_API_URL,
  fetchCategories,
  fetchMechanics,
  firebaseConfig,
  FIREBASE_DB_URL,
} from './util';
import styles from './styles';

export default function FavouriteGames({ route, navigation }) {
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const database = getDatabase(firebase, FIREBASE_DB_URL);

  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const itemsRef = ref(database, 'boardgames/');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setGames(Object.values(data));
      setIsLoading(false);
    });
  }, []);

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
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('game', {
                  gameId: `${item.gameId}`,
                  prevScreen: 'favourites',
                })
              }
            >
              <View style={styles.listContainer}>
                <Text style={[styles.h3, { marginLeft: 30 }]}>
                  {item.gameName}
                </Text>
              </View>
              <Image style={styles.listImg} source={{ uri: item.gameImg }} />
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
