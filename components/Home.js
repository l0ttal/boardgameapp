import { Text, SafeAreaView, View } from 'react-native';

export default function Home({ route }) {
  const theme = route.params.theme;

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <Text style={theme.h1}>Welcome to my app</Text>
      </View>
    </SafeAreaView>
  );
}
