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
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  {item.description[0]}
                  Genre: {item.boardgamecategory[0]._}
                  Year published: {item.yearpublished[0]}
                  Publisher: {item.boardgamepublisher[0]._}
                  Playing time: {item.playingtime[0]}
                  Players: {item.minplayers[0]} - {item.maxplayers[0]}
                  Age: {item.age[0]}
                  Mechanics:
                </Text>
                {item.boardgamemechanic.map((item, index) => (
                  <Text style={styles.text} key={index}>
                    {item._}
                  </Text>
                ))}
                <Text style={styles.text}>Expansions:</Text>
                {item.boardgameexpansion &&
                  item.boardgameexpansion.map((item, index) => (
                    <Text style={styles.text} key={index}>
                      {item._}
                    </Text>
                  ))}
              </View>
            </>
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </SafeAreaView>
  );
}
