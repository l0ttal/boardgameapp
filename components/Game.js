import { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { GAME_API_URL } from './util';
import styles from './styles';

export default function Game({ route, navigation }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame();
  }, [route.params.gameId]);

  const fetchGame = () => {
    fetch(`${GAME_API_URL}/boardgame/${route.params.gameId}`)
      .then((response) => response.text())
      .then((data) => {
        parser.parseString(data, (error, result) => {
          if (error) {
            console.error(`XML parse error: ${error}`);
          } else {
            setGame(result.boardgames.boardgame);
          }
        });
      })
      .catch((error) => console.error(`API fetch error: ${error}`));
  };

  return (
    <SafeAreaView style={styles.container}>
      {game && (
        <FlatList
          data={game}
          renderItem={({ item }) => (
            <>
              <View style={styles.textContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(route.params.prevScreen)}
                >
                  <Ionicons
                    name={'arrow-back-outline'}
                    size={35}
                    style={styles.h1}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.textContainer}>
                <Text style={[styles.h1, { fontSize: 35 }]}>
                  {item.name[0]._}
                </Text>
              </View>
              <Image style={styles.img} source={{ uri: item.image[0] }} />
              <View style={[styles.textContainer, { position: 'relative' }]}>
                <Text style={styles.tableText}>{item.description[0]}</Text>
              </View>

              <FlatList
                data={game}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Genre</Text>
                      <Text style={styles.tableText}>
                        {item.boardgamecategory[0]._}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Year published</Text>
                      <Text style={styles.tableText}>
                        {item.yearpublished[0]}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Publisher</Text>
                      <Text style={styles.tableText}>
                        {item.boardgamepublisher[0]._}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Playing time</Text>
                      <Text style={styles.tableText}>
                        {item.playingtime[0]}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Players</Text>
                      <Text style={styles.tableText}>
                        {item.minplayers[0]} - {item.maxplayers[0]}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Age</Text>
                      <Text style={styles.tableText}>{item.age[0]}</Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Mechanics</Text>
                      <Text style={styles.tableText}>
                        {item.boardgamemechanic
                          ? item.boardgamemechanic
                              .map((mechanic) => mechanic._)
                              .join(', ')
                          : 'None'}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Expansions</Text>
                      <Text style={styles.tableText}>
                        {item.boardgameexpansion
                          ? item.boardgameexpansion
                              .map((expansion) => expansion._)
                              .join(', ')
                          : 'None'}
                      </Text>
                    </View>
                  </>
                )}
                keyExtractor={(item, index) => index}
              />
            </>
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </SafeAreaView>
  );
}
