import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar, AsyncStorage, NetInfo} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { getPeople, storeData, retrieveData } from './api';

class Challenge3 extends Component {
  state = {
    people: [],
    connectionStatus: false
  }

  componentDidMount() {
    const {connectionStatus} = this.state
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
  }

  handleConnectionChange = (isConnected) => {
    this.setState({connectionStatus: isConnected}, this.handleAsyncConnection )
  }
  
  handleAsyncConnection = async () => {
    const {people, connectionStatus} = this.state
    console.log(connectionStatus)
    if (connectionStatus) {
      const response = await getPeople()
      this.setState({ people: response.results }, () => {
        if (people.length > 0) {
          storeData(response.results)
        }
      })
    } else {
      if (people.length === 0) {
        retrieveData()
          .then(response => {
            if(response) {
              this.setState({people: JSON.parse(response)})
            }
          })
          .catch(error => console.log(error));
      }
    }
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={`Birth Year: ${item.birth_year}`}
        hideChevron
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <List containerStyle={{ flex: 1 }}>
          <FlatList
            data={this.state.people}
            renderItem={this.renderItem}
            keyExtractor={item => item.created}
          />
        </List>
      </SafeAreaView>
    );
  }
}

export default Challenge3;
