import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import GameGenres from './GameGenres';
import Search from './Search';
import GameList from './GameList';
import Game from './Game';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'genres') {
            iconName = focused ? 'planet' : 'planet-outline';
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'games') {
            iconName = focused ? 'library' : 'library-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={40}
              color={color}
              style={{ padding: 13 }}
            />
          );
        },
        tabBarActiveTintColor: styles.tabBarActive.color,
        tabBarInactiveTintColor: styles.tabBarInactive.color,
        tabBarActiveBackgroundColor: styles.container.backgroundColor,
        tabBarInactiveBackgroundColor: styles.container.backgroundColor,
        tabBarShowLabel: false,
        tabBarStyle: { marginBottom: 20 },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="games" component={GameList} />
      <Tab.Screen name="genres" component={GameGenres} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen
        name="game"
        component={Game}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: (props) => {
            return (props.style = []);
          },
        }}
      />
    </Tab.Navigator>
  );
}
