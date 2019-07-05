/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

var MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7eb5b3ce9bcad1c8cfbbfa274f3c67c4/83025aafa40f4bfbb5163db50d4f78f0f6361808.jpg" }
  }
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
  var movie = MOCKED_MOVIES_DATA[0];
  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </View>
  );
  }
}