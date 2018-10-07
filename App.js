import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import AppHandler from './components/Global/AppHandler';
import Screen from './components/Core/Screen/Screen';
import Controls from './components/Core/Controls/Controls';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <AppHandler>
        <View style={styles.container}>
          <Screen />
          <Controls />
        </View>
      </AppHandler>
    );
  }
}
