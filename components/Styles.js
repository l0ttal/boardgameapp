import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  lightTheme: {
    text: {
      fontSize: 15,
      fontFamily: 'Raleway_400Regular',
      color: '#1e1f1b',
    },
    h1: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'Raleway_700Bold',
      color: '#1e1f1b',
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Raleway_500Medium',
      color: '#1e1f1b',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f3f1',
    },
    listContainer: {
      width: '90%',
    },
    textContainer: {
      width: '90%',
    },
    tabBarActive: {
      color: '#1e1f1b',
    },
    tabBarInactive: {
      color: '#5c5f53',
    },
  },
  darkTheme: {
    text: {
      fontSize: 15,
      fontFamily: 'Raleway_400Regular',
      color: '#ced0c8',
    },
    h1: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'Raleway_700Bold',
      color: '#ced0c8',
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Raleway_500Medium',
      color: '#ced0c8',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1e1f1b',
    },
    listContainer: {
      width: '90%',
    },
    textContainer: {
      width: '90%',
    },
    tabBarActive: {
      color: '#ced0c8',
    },
    tabBarInactive: {
      color: '#848877',
    },
  },
});
