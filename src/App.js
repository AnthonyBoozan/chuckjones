import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

class App extends Component {
  componentWillMount() {
    Amplify.configure(aws_exports);
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
