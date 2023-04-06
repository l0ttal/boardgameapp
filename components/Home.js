import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import backgroundImage from './images/pexels-cottonbro.jpg';
import link1 from './images/pexels-vlada.jpg';
import link2 from './images/pexels-pavel.jpg';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingBottom: 50 }}>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>Boardgame app</Text>
        </View>

        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          imageStyle={styles.backgroundImg}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <Ionicons name="chevron-down-outline" size={40} style={styles.icon} />
        </ImageBackground>

        <View
          style={{
            marginTop: 300,
            marginBottom: 50,
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image source={link1} style={styles.linkImg} />
          <TouchableOpacity onPress={() => navigation.navigate('search')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search for games</Text>
            </View>
          </TouchableOpacity>

          <Image source={link2} style={styles.linkImg} />
          <TouchableOpacity onPress={() => navigation.navigate('games')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse boardgames</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
