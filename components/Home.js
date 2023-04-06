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
import link2 from './images/pexels-studio.jpg';
import link3 from './images/pexels-dani.jpg';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View
          style={{
            marginTop: 100,
            marginBottom: -90,
            marginLeft: 10,
            zIndex: 1,
          }}
        >
          <Text style={styles.h1}>Boardgame app</Text>
        </View>

        <View
          style={{
            borderWidth: 5,
            borderColor: '#0f0e0b',
            borderTopLeftRadius: 200,
            borderTopRightRadius: 200,
          }}
        >
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            imageStyle={styles.backgroundImg}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <Ionicons
              name="chevron-down-outline"
              size={40}
              style={styles.icon}
            />
          </ImageBackground>
        </View>

        <View
          style={{
            marginTop: 90,
            marginBottom: 70,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={link1} style={styles.linkImg} />
          <TouchableOpacity onPress={() => navigation.navigate('search')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search for games</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 70,
            marginBottom: 70,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={link2} style={styles.linkImg} />
          <TouchableOpacity onPress={() => navigation.navigate('games')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse boardgames</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 70,
            marginBottom: 70,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={link3} style={styles.linkImg} />
          <TouchableOpacity onPress={() => navigation.navigate('genres')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse by genre</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
