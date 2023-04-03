import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Game from './Game';
import GameList from './GameList';

// Create Stack navigation between GameList and Game
const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GameList" component={GameList} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
}
