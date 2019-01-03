import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  twoThirdContainer: {
    flexGrow: 2,
    backgroundColor: 'blue'
  },
  oneThirdContainer: {
    flexGrow: 1,
    backgroundColor: 'green'
  }

});

const Exercise1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.twoThirdContainer}/>
        <View style={styles.oneThirdContainer}/>
      </View>
    </View>
  );
};

export default Exercise1;
