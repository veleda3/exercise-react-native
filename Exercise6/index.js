import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import ProgressiveImage from './ProgressiveImage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#e1e4e8',
    borderRadius: 10
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

const width = Dimensions.get('window').width
const cacheBreaker = `buster=${Math.random()}`

class Exercise6 extends Component {
  state = {
    loading: false,
  }


  render() {
    return (
      <View style={styles.container}>
          <ProgressiveImage
            style={styles.image}
            thumbnailSource={{uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&${cacheBreaker}`}}
            source={{uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${width}&${cacheBreaker}`}}
            resizeMode='cover'
          />
      </View>
    );
  }
}

export default Exercise6;
