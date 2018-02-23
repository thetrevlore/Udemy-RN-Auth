import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { FIREBASE_API_KEY } from './secrets';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: 'auth-cc92e.firebaseapp.com',
      databaseURL: 'https://auth-cc92e.firebaseio.com',
      projectId: 'auth-cc92e',
      storageBucket: 'auth-cc92e.appspot.com',
      messagingSenderId: '778806436617'
    });

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <View style={{ alignSelf: 'center' }}><Spinner size="large" /></View>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
