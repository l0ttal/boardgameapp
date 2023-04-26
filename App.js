import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, CrimsonText_700Bold } from '@expo-google-fonts/crimson-text';
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';
import TabNav from './components/TabNav';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';

enableScreens();

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
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
