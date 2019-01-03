import React, { Component } from 'react';
import {ScrollView, FlatList, Text, View, SafeAreaView, StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    height: Dimensions.get('window').height / 14,
    display: 'flex',
    justifyContent: 'center'
  },
  textName: {
    fontSize: 18,
    paddingLeft: 8
  },
  textBirdDay: {
    fontSize: 12,
    paddingLeft: 8,
    fontWeight: 'bold',
    color: 'gray'
  }
})

class Challenge3 extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error));
  }

  render() {
    const {people} = this.state
    console.log(people[0])
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{borderTopWidth: 1}}/>
        <ScrollView>
          <FlatList
            data={people}
            keyExtractor={({created}) => created}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textBirdDay}>Birth Year: {item.birth_year}</Text>
              </View>
            )}
          >
          </FlatList>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Challenge3;
