import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import GameGenres from './GameGenres';
import Search from './Search';
import GameList from './GameList';
import Game from './Game';

const Tab = createBottomTabNavigator();

export default function TabNav({ theme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Genres') {
            iconName = focused ? 'planet' : 'planet-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Games') {
            iconName = focused ? 'library' : 'library-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerBackgroundContainerStyle: theme.container,
        headerTitleStyle: theme.h1,
        tabBarActiveTintColor: theme.tabBarActive.color,
        tabBarInactiveTintColor: theme.tabBarInactive.color,
        tabBarActiveBackgroundColor: theme.container.backgroundColor,
        tabBarInactiveBackgroundColor: theme.container.backgroundColor,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name="Games"
        component={GameList}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name="Genres"
        component={GameGenres}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={{ theme: theme }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarButton: (props) => {
            return (props.style = []);
          },
        }}
        initialParams={{ theme: theme }}
      />
    </Tab.Navigator>
  );
}
