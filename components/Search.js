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

export default function Search({ route, navigation }) {
  const theme = route.params.theme;

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
        <SafeAreaView style={theme.container}>
          <View style={theme.textContainer}>
            <Text style={theme.text}>That wasn't a valid searchterm!</Text>
          </View>
        </SafeAreaView>
      );
    }
  };

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <Text style={theme.text}>Search by name: </Text>
        <TextInput
          placeholder={'e.g. Battle Wizards'}
          value={searchTerm}
          style={theme.input}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Pressable onPress={() => searchGame(searchTerm)} style={theme.button}>
          <Text style={theme.buttonText}>Search</Text>
        </Pressable>
        <View>
          <FlatList
            data={gameData}
            renderItem={({ item }) => (
              <View style={theme.textContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('game', {
                      gameId: `${item.$.objectid}`,
                    })
                  }
                >
                  <Text style={theme.text}>{item.name[0]._}</Text>
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
