import { Text, View } from 'react-native';
import styles from './Styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to my app</Text>
    </View>
  );
}
