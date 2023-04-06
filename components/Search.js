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
      <View style={styles.textContainer}>
        <Text style={styles.text}>Search by name: </Text>
        <TextInput
          placeholder={'e.g. Battle Wizards'}
          value={searchTerm}
          style={styles.input}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Pressable onPress={() => searchGame(searchTerm)} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
        <View>
          <FlatList
            data={gameData}
            renderItem={({ item }) => (
              <View style={styles.textContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('game', {
                      gameId: `${item.$.objectid}`,
                    })
                  }
                >
                  <Text style={styles.text}>{item.name[0]._}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
