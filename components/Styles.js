import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  lightTheme: {
    text: {
      fontSize: 25,
      fontFamily: 'Raleway_400Regular',
      color: '#1e1f1b',
    },
    h1: {
      fontSize: 35,
      fontWeight: '500',
      fontFamily: 'Raleway_700Bold',
      color: '#1e1f1b',
    },
    buttonText: {
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'Raleway_500Medium',
      color: '#1e1f1b',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f3f3f1',
    },
    listContainer: {
      width: '90%',
    },
    textContainer: {
      width: '90%',
      margin: '5%',
    },
    tabBarActive: {
      color: '#1e1f1b',
    },
    tabBarInactive: {
      color: '#5c5f53',
    },
    img: {
      width: '100%',
      height: 350,
      marginTop: 10,
      marginBottom: 10,
    },
    input: {
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      width: '70%',
      height: 30,
      borderBottomColor: '#5c5f53',
      borderBottomWidth: 2,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      width: 120,
      height: 50,
      borderWidth: 1,
      borderRadius: 20,
    },
  },
  darkTheme: {
    text: {
      fontSize: 25,
      fontFamily: 'Raleway_400Regular',
      color: '#ced0c8',
    },
    h1: {
      fontSize: 35,
      fontWeight: '500',
      fontFamily: 'Raleway_700Bold',
      color: '#ced0c8',
    },
    buttonText: {
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'Raleway_500Medium',
      color: '#ced0c8',
      padding: '5%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#1e1f1b',
    },
    listContainer: {
      width: '90%',
    },
    textContainer: {
      width: '90%',
      margin: '5%',
    },
    tabBarActive: {
      color: '#ced0c8',
    },
    tabBarInactive: {
      color: '#848877',
    },
    img: {
      width: '100%',
      height: 350,
      marginTop: 10,
      marginBottom: 10,
    },
    input: {
      padding: 5,
      marginTop: 10,
      marginBottom: 10,
      width: '70%',
      height: 30,
      borderBottomColor: '#848877',
      borderBottomWidth: 2,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      width: 120,
      height: 50,
      borderWidth: 1,
      borderRadius: 20,
    },
    // arrowContainer: {
    //   position: 'absolute',
    //   top: 100,
    //   left: 100,
    //   zIndex: 1,
    // },
  },
});
