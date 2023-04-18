import { NavigationContainer } from '@react-navigation/native';
import { useFonts, CrimsonText_700Bold } from '@expo-google-fonts/crimson-text';
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';
import * as SplashScreen from 'expo-splash-screen';

import TabNav from './components/TabNav';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
    CrimsonText_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return null;
  }

  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
