import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { GAME_API_URL, fetchCategories } from './util';
import styles from './styles';

export default function GameCategories({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatlistRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const categories = await fetchCategories();
      setCategoryData(categories);
    };

    setIsLoading(false);
    fetchData();
  }, []);

  const fetchGames = (categoryId) => {
    if (categoryId) {
      setIsLoading(true);

      fetch(`${GAME_API_URL}&categories=${categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          setGameData(data.games);
          setIsLoading(false);
        })
        .catch((error) => console.error(`API games fetch error: ${error}`));
    }
  };

  const handleCategoryPress = (categoryId, index) => {
    setSelectedCategoryId(categoryId);
    fetchGames(categoryId);
    setSelectedIndex(index);
  };

  // Scroll to selected category
  const handleOnLayout = () => {
    setTimeout(() => {
      flatlistRef.current?.scrollToIndex({
        index: selectedIndex,
        animated: true,
      });
    }, 0);
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
      <View style={styles.textContainer}>
        {categoryData && (
          <FlatList
            ref={flatlistRef}
            data={categoryData}
            onLayout={handleOnLayout}
            onScrollToIndexFailed={(info) => {
              const wait = new Promise((resolve) => setTimeout(resolve, 500));
              wait.then(() => {
                flatlistRef.current?.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              });
            }}
            renderItem={({ item, index }) => (
              <>
                <View style={styles.listContainer}>
                  <Pressable
                    onPress={() => handleCategoryPress(item.id, index)}
                  >
                    <Text style={styles.h3}>
                      {item.name}{' '}
                      <Ionicons name="chevron-down-outline" size={30} />
                    </Text>
                  </Pressable>
                </View>

                {gameData && selectedCategoryId === item.id && (
                  <FlatList
                    data={gameData}
                    renderItem={({ item, index }) => (
                      <>
                        <View style={styles.listContainer}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('game', {
                                gameId: `${item.id}`,
                                prevScreen: 'categories',
                              })
                            }
                          >
                            <Text style={styles.text}>{item.name}</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                    keyExtractor={(item, index) => index}
                  />
                )}
              </>
            )}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
