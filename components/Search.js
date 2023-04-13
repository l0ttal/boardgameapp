import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GAME_API_URL } from './util';

import styles from './styles';

export default function Search({ route, navigation }) {
  const [gameData, setGameData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const searchGame = (searchTerm) => {
    if (searchTerm) {
      fetch(`${GAME_API_URL}/search?search=${encodeURIComponent(searchTerm)}`)
        .then((response) => response.text())
        .then((data) => {
          parser.parseString(data, (error, result) => {
            if (error) {
              console.error(`XML parse error: ${error}`);
            } else {
              setGameData(result.boardgames.boardgame);
            }
          });
        });
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>That wasn't a valid searchterm!</Text>
          </View>
        </SafeAreaView>
      );
    }
  };

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
        initialNumToRender={5}
        data={gameData}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('game', {
                  gameId: `${item.$.objectid}`,
                  prevScreen: 'search',
                })
              }
            >
              <Text style={styles.h3}>{item.name[0]._}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
