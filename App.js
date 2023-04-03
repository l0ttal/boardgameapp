import { NavigationContainer } from '@react-navigation/native';
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

import TabNav from './components/TabNav';
import styles from './components/styles';

SplashScreen.preventAutoHideAsync();

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
        <TabNav theme={theme} />
      </NavigationContainer>
    </SafeAreaView>
  );
}
