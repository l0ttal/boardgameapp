import { Text, SafeAreaView, View } from 'react-native';

import styles from './Styles';

export default function Home(props) {
  const theme = props.route.params.theme;

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <Text style={theme.h1}>Welcome to my app</Text>
      </View>
    </SafeAreaView>
  );
}
