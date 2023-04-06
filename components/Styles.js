import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3cfc5',
  },
  listContainer: {
    width: '90%',
  },
  textContainer: {
    width: '80%',
    margin: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Raleway_400Regular',
    color: '#2c2921',
    flexBasis: 1,
  },
  h1: {
    fontSize: 50,
    fontWeight: '500',
    fontFamily: 'Raleway_700Bold',
    color: '#2c2921',
    letterSpacing: -2,
    textTransform: 'uppercase',
    flexBasis: 1,
  },
  h2: {
    fontSize: 45,
    fontWeight: '500',
    fontFamily: 'Raleway_700Bold',
    color: '#2c2921',
    letterSpacing: 2,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Raleway_500Medium',
    color: '#2c2921',
    padding: 5,
  },
  button: {
    backgroundColor: '#f4f3f0',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    borderWidth: 1,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  tabBarActive: {
    color: '#2c2921',
  },
  tabBarInactive: {
    color: '#665f4d',
  },
  img: {
    width: '100%',
    height: 350,
    marginTop: 10,
    marginBottom: 10,
  },
  backgroundImg: {
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    height: 400,
    position: 'relative',
  },
  linkImg: {
    resizeMode: 'cover',
    height: 150,
    width: '90%',
    position: 'absolute',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderColor: '#0f0e0b',
  },
  input: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    height: 30,
    borderBottomColor: '#2c2921',
    borderBottomWidth: 2,
  },
  icon: {
    color: '#0f0e0b',
    alignSelf: 'center',
  },

  // arrowContainer: {
  //   position: 'absolute',
  //   top: 100,
  //   left: 100,
  //   zIndex: 1,
  // },
});
