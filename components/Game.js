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
import Ionicons from 'react-native-vector-icons/Ionicons';

import { GAME_API_URL } from './util';
import styles from './styles';

export default function Game({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame();
  }, [route.params.gameId]);

  const fetchGame = () => {
    setIsLoading(true);

    fetch(`${GAME_API_URL}&ids=${route.params.gameId}`)
      .then((response) => response.json())
      .then((data) => {
        setGame(data.games);
        setIsLoading(false);
      })
      .catch((error) => console.error(`API fetch error: ${error}`));
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
                <Text style={[styles.h1, { fontSize: 35 }]}>{item.name}</Text>
              </View>
              <Image style={styles.img} source={{ uri: item.image_url }} />
              <View style={[styles.textContainer, { position: 'relative' }]}>
                <Text style={styles.tableText}>{item.description_preview}</Text>
              </View>

              <FlatList
                data={game}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Categories</Text>
                      <Text style={styles.tableText}>
                        {item.categories
                          ? item.categories
                              .map((category) => category.id)
                              .join(', ')
                          : 'None'}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Year published</Text>
                      <Text style={styles.tableText}>
                        {item.year_published}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Publisher</Text>
                      <Text style={styles.tableText}>
                        {item.primary_publisher.name}
                      </Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Playing time</Text>
                      <Text style={styles.tableText}>{item.playtime}</Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Players</Text>
                      <Text style={styles.tableText}>{item.players}</Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Age</Text>
                      <Text style={styles.tableText}>{item.min_age}</Text>
                    </View>
                    <View style={styles.tableContainer}>
                      <Text style={styles.tableHeaders}>Mechanics</Text>
                      <Text style={styles.tableText}>
                        {item.mechanics
                          ? item.mechanics
                              .map((mechanic) => mechanic.id)
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
