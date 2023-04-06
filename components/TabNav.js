import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImageBackground } from 'react-native';

import Home from './Home';
import GameGenres from './GameGenres';
import Search from './Search';
import GameList from './GameList';
import Game from './Game';
import styles from './styles';
import link1 from './images/pexels-vlada.jpg';
import link2 from './images/pexels-studio.jpg';
import link3 from './images/pexels-dani.jpg';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStatusBarHeight: 80,
        headerTitleStyle: [styles.h2, { paddingBottom: 80, color: '#f4f3f0' }],
        headerTitleAlign: 'left',
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
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="games"
        component={GameList}
        options={{
          headerBackground: () => (
            <ImageBackground
              source={link2}
              resizeMode="cover"
              imageStyle={styles.backgroundImg}
              style={{ flex: 1, justifyContent: 'flex-end' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="genres"
        component={GameGenres}
        options={{
          headerBackground: () => (
            <ImageBackground
              source={link3}
              resizeMode="cover"
              imageStyle={styles.backgroundImg}
              style={{ flex: 1, justifyContent: 'flex-end' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerBackground: () => (
            <ImageBackground
              source={link1}
              resizeMode="cover"
              imageStyle={styles.backgroundImg}
              style={{ flex: 1, justifyContent: 'flex-end' }}
            />
          ),
        }}
      />
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
