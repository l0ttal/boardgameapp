import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';

import { GAME_API_URL } from './util';
import styles from './styles';

export default function GameList({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gameList, setGameList] = useState(null);

  // useEffect(() => {
  //   fetchGames();
  // }, []);

  // const fetchGames = () => {
  //   setIsLoading(true);

  //   fetch(`${GAME_API_URL}/search?search=a`)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       parser.parseString(data, (error, result) => {
  //         if (error) {
  //           console.error(`XML parse error: ${error}`);
  //         } else {
  //           setGameList(result.boardgames.boardgame);
  //           setIsLoading(false);
  //         }
  //       });
  //     })
  //     .catch((error) => console.error(`API fetch error: ${error}`));
  // };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={styles.textContainer}>
  //       {gameList && (
  //         <FlatList
  //           initialNumToRender={5}
  //           maxToRenderPerBatch={5}
  //           data={gameList}
  //           renderItem={({ item }) => (
  //             <View style={styles.textContainer}>
  //               <Text
  //                 style={styles.h1}
  //                 onPress={() =>
  //                   navigation.navigate('game', {
  //                     gameId: `${item.$.objectid}`,
  //                   })
  //                 }
  //               >
  //                 {item.name[0]._}
  //               </Text>
  //             </View>
  //           )}
  //           keyExtractor={(item, index) => index}
  //         />
  //       )}
  //     </View>
  //   </SafeAreaView>
  // );
}
