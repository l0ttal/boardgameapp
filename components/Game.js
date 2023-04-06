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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.text}>
                  <Ionicons
                    name={'arrow-back-outline'}
                    size={35}
                    style={styles.arrowContainer}
                  />
                </Text>
              </TouchableOpacity>
              <Image style={styles.img} source={{ uri: item.thumbnail[0] }} />
              <View style={styles.textContainer}>
                <Text style={styles.h1}>{item.name[0]._}</Text>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </SafeAreaView>
  );
}
