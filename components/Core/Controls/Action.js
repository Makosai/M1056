import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Assets

// Constants
const SIZE = 100;

// Styles
const styles = StyleSheet.create({
  directional: {
    position: 'absolute',
    display: 'flex',
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  select: { right: SIZE, top: SIZE / 1.5 },
  back: { top: SIZE }
});

/**
 * A directional arrow.
 * @property dir The direction this arrow should face (up, down, left, right).
 */
export default class Action extends Component {
  action2letter = (action) => {
    switch (action) {
    case 'select':
      return 'A';

    case 'back':
      return 'B';

    default:
      return 'C';
    }
  }

  render() {
    const { action } = this.props;

    return (
      <TouchableOpacity style={[styles.directional, styles[action]]} onPress={this.handle}>
        <TouchableWithoutFeedback>
          <View style={{ position: 'absolute' }}>
            <Text>
              <Ionicons name="ios-radio-button-on" size={SIZE} color="blue" />
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{ position: 'absolute' }}>
            <Text style={{ fontSize: SIZE / 2, color: 'white' }}>
              {this.action2letter(action)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }
}

Action.propTypes = {
  action: PropTypes.oneOf(['select', 'back']).isRequired
};
