import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import Directional from './Directional';
import Action from './Action';


// Styles
const styles = StyleSheet.create({
  controls: {
    bottom: 0,
    width: '100%',
    height: '40%',
    display: 'flex',
    backgroundColor: 'gray',
    paddingTop: 5
  },
  directionals: {
    position: 'relative'
  },
  actions: {
    position: 'relative'
  }
});


export default class Controls extends Component {
  render() {
    return (
      <View style={styles.controls}>
        <View style={styles.directionals}>
          <Directional dir="up" />
          <Directional dir="down" />
          <Directional dir="left" />
          <Directional dir="right" />
        </View>
        <View style={styles.actions}>
          <Action action="select" />
          <Action action="back" />
        </View>
      </View>
    );
  }
}
