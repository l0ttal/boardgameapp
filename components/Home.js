import { useCallback } from "react";
import { Text, View } from "react-native";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import * as SplashScreen from "expo-splash-screen";
import styles from "./Styles";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    } else {
      return null;
    }
  });

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.h1}>Welcome to my app</Text>
    </View>
  );
}
