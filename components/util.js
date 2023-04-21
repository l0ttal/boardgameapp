import { Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, get, child } from 'firebase/database';

export const GAME_API_URL =
  'https://api.boardgameatlas.com/api/search?client_id=7iR1v7gRI0';

export const GAME_CATEGORIES_URL =
  'https://api.boardgameatlas.com/api/game/categories?client_id=7iR1v7gRI0';

export const GAME_MECHANICS_URL =
  'https://api.boardgameatlas.com/api/game/mechanics?client_id=7iR1v7gRI0';

export const FIREBASE_DB_URL =
  'https://boardgameapp-b73b0-default-rtdb.europe-west1.firebasedatabase.app/';

export const firebaseConfig = {
  apiKey: 'AIzaSyATKBtsIMLGJOwwjZQIjI81yED2-6gSs9A',
  authDomain: 'boardgameapp-b73b0.firebaseapp.com',
  projectId: 'boardgameapp-b73b0',
  storageBucket: 'boardgameapp-b73b0.appspot.com',
  messagingSenderId: '39831246946',
  appId: '1:39831246946:web:2d733a6fb049dc2fb3593b',
};

export async function fetchCategories() {
  try {
    const response = await fetch(`${GAME_CATEGORIES_URL}`);
    const data = await response.json();
    return data.categories;
  } catch (error) {
    return console.error(`API categories fetch error: ${error}`);
  }
}

export async function fetchMechanics() {
  try {
    const response = await fetch(`${GAME_MECHANICS_URL}`);
    const data = await response.json();
    return data.mechanics;
  } catch (error) {
    return console.error(`API mechanics fetch error: ${error}`);
  }
}

export function checkIfGameIsAlreadyFavourite(
  navigation,
  gameId,
  gameName,
  gameImg
) {
  const firebase = initializeApp(firebaseConfig);
  const database = getDatabase(firebase, FIREBASE_DB_URL);

  const gamesRef = ref(database, 'boardgames/');
  const savedGameIds = [];

  get(child(gamesRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      Object.values(snapshot.val()).map((childSnapshot) => {
        savedGameIds.push(childSnapshot.gameId);
      });

      if (!savedGameIds.includes(gameId)) {
        saveFavouriteGame(navigation, database, gameId, gameName, gameImg);
      } else {
        Alert.alert(`${gameName} is already in your Favourites!`, '', [
          {
            text: 'Go to favourites',
            onPress: () => navigation.navigate('favourites'),
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]);
      }
    } else {
      saveFavouriteGame(navigation, database, gameId, gameName, gameImg);
    }
  });
}

export function saveFavouriteGame(
  navigation,
  database,
  gameId,
  gameName,
  gameImg
) {
  push(ref(database, 'boardgames/'), {
    gameId: gameId,
    gameName: gameName,
    gameImg: gameImg,
  });

  Alert.alert(`${gameName} added to Favourites!`, '', [
    {
      text: 'Go to favourites',
      onPress: () => navigation.navigate('favourites'),
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
}
