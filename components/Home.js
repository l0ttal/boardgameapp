import { Text, SafeAreaView, useColorScheme, View } from 'react-native';

import styles from './Styles';

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <Text style={theme.h1}>Welcome to my app</Text>
      </View>
    </SafeAreaView>
  );
}
