import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native';

import TabNav from './components/TabNav';
import styles from './components/styles';

SplashScreen.preventAutoHideAsync();

export default function App() {
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

  return (
    <SafeAreaView
      style={{ backgroundColor: styles.container.backgroundColor, flex: 1 }}
    >
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}
