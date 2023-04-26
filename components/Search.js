import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { GAME_API_URL } from './util';
import styles from './styles';

export default function Search({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const searchGame = (searchTerm) => {
    if (searchTerm) {
      setIsLoading(true);

      fetch(
        `${GAME_API_URL}&fuzzy_match=true&name=${encodeURIComponent(
          searchTerm
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGameData(data.games);
          setIsLoading(false);
        })
        .catch((error) => console.error(`API fetch error: ${error}`));
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
      <View
        style={{ flexDirection: 'row', alignItems: 'flex-end', margin: 20 }}
      >
        <TextInput
          placeholder={'e.g. Battle Wizards'}
          placeholderTextColor={styles.text.color}
          value={searchTerm}
          style={styles.input}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Pressable
          onPress={() => searchGame(searchTerm)}
          style={[styles.button, { width: 55, marginLeft: 15 }]}
        >
          <Text style={styles.buttonText}>
            <Ionicons name="search-outline" size={40} />
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={gameData}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('game', {
                  gameId: `${item.id}`,
                  prevScreen: 'search',
                })
              }
            >
              <Text style={styles.h3}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
