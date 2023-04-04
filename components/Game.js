import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import parser from 'react-native-xml2js';

export default function Game({ route, navigation }) {
  const theme = route.params.theme;

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.textContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={theme.text}>Go back</Text>
        </TouchableOpacity>
      </View>
      <View style={theme.textContainer}>
        <Text>You found the game page</Text>
      </View>
    </SafeAreaView>
  );
}
