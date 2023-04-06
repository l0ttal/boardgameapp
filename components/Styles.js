import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a79f8b',
  },
  listContainer: {
    width: '90%',
  },
  textContainer: {
    width: '90%',
    margin: '5%',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Raleway_400Regular',
    color: '#1d1b16',
    flexBasis: 1,
  },
  h1: {
    fontSize: 45,
    fontWeight: '500',
    fontFamily: 'Raleway_700Bold',
    color: '#1d1b16',
    flexBasis: 1,
  },
  h2: {
    fontSize: 35,
    fontWeight: '500',
    fontFamily: 'Raleway_700Bold',
    color: '#1d1b16',
    flexBasis: 1,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Raleway_500Medium',
    color: '#1d1b16',
    padding: 5,
  },
  button: {
    backgroundColor: '#dedbd3',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    borderWidth: 1,
    borderRadius: 20,
    flexWrap: 'wrap',
  },
  tabBarActive: {
    color: '#1d1b16',
  },
  tabBarInactive: {
    color: '#494437',
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
    borderWidth: 5,
    borderColor: '#000',
    height: 300,
  },
  linkImg: {
    resizeMode: 'center',
    height: 150,
    width: '70%',
    position: 'absolute',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  input: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    height: 30,
    borderBottomColor: '#1d1b16',
    borderBottomWidth: 2,
  },
  icon: {
    color: '#000',
    alignSelf: 'center',
  },

  // arrowContainer: {
  //   position: 'absolute',
  //   top: 100,
  //   left: 100,
  //   zIndex: 1,
  // },
});
