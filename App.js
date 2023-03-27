import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';

import Home from './components/Home';
import GameGenres from './components/GameGenres';
import styles from './components/Styles';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === 'light' ? styles.lightTheme : styles.darkTheme
  );
  const splashBackground = theme.container.backgroundColor;

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return null;
  }

  const toggleColorScheme = () => {
    setTheme(
      theme === styles.lightTheme ? styles.darkTheme : styles.lightTheme
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.container.backgroundColor, flex: 1 }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Ionicons
          name={theme === styles.lightTheme ? 'moon' : 'sunny'}
          size={24}
          color={theme === styles.lightTheme ? '#1e1f1b' : '#ced0c8'}
          style={{ marginRight: 20 }}
          onPress={toggleColorScheme}
        />
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Genres') {
                iconName = focused ? 'planet' : 'planet-outline';
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
            name="Genres"
            component={GameGenres}
            initialParams={{ theme: theme }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
