import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {InputText} from './inputText'
import {Header} from './header'
import {Button} from './button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
});

const Challenge2 = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Header>Welcome to Gaze</Header>

    <Image
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <InputText
      placeholder="email"

    />
    <InputText
      placeholder="password"
      secureTextEntry
    />
    <Button />
  </SafeAreaView>
);

export default Challenge2;
