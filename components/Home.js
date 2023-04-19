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
import link4 from './images/pexels-egidijus.jpg';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <View
          style={{
            marginTop: 100,
            marginBottom: 20,
            marginLeft: 10,
            zIndex: 1,
          }}
        >
          <Text style={styles.h1}>Boardgame app</Text>
        </View>

        <View
          style={{
            borderTopWidth: 5,
            borderRightWidth: 5,
            borderLeftWidth: 5,
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
          ></ImageBackground>
        </View>
        <Ionicons name="chevron-down-outline" size={40} style={styles.icon} />

        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <View style={[styles.linkImgContainer, { marginTop: 90 }]}>
            <Image source={link1} style={styles.linkImg} />
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search for games</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('games')}>
          <View style={styles.linkImgContainer}>
            <Image source={link2} style={styles.linkImg} />
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse boardgames</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('categories')}>
          <View style={styles.linkImgContainer}>
            <Image source={link3} style={styles.linkImg} />
            <View style={styles.button}>
              <Text style={styles.buttonText}>Browse by category</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('favourites')}>
          <View style={styles.linkImgContainer}>
            <Image source={link4} style={styles.linkImg} />
            <View style={styles.button}>
              <Text style={styles.buttonText}>Favourites</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
