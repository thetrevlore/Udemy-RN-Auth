import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'API KEY HERE',
      authDomain: 'auth-cc92e.firebaseapp.com',
      databaseURL: 'https://auth-cc92e.firebaseio.com',
      projectId: 'auth-cc92e',
      storageBucket: 'auth-cc92e.appspot.com',
      messagingSenderId: '778806436617'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Heyo</Text>
      </View>
    );
  }
}

export default App;
