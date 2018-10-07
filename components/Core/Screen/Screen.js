import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Styles
const styles = StyleSheet.create({
  screen: {
    bottom: 0,
    width: '100%',
    height: '60%',
    backgroundColor: 'green'
  },
  draw: {
    position: 'relative'
  },
});


export default class Screen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.draw}>
          <Text>Screen</Text>
        </View>
      </View>
    );
  }
}
