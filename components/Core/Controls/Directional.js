import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Assets

// Constants
const SIZE = 80;
const SHRINK = 15;
const YOFFSET = 20;

// Styles
const styles = StyleSheet.create({
  directional: {
    position: 'absolute',
    width: SIZE,
    height: SIZE
  },
  up: { top: YOFFSET, left: SIZE - SHRINK },
  down: { top: YOFFSET + (SIZE - SHRINK) * 2, left: SIZE - SHRINK },
  left: { top: YOFFSET + SIZE - SHRINK },
  right: { top: YOFFSET + SIZE - SHRINK, left: (SIZE - SHRINK) * 2 }
});

/**
 * A directional arrow.
 * @property dir The direction this arrow should face (up, down, left, right).
 */
export default class Directional extends Component {
  handle = () => {
    const f = true;
    return f;
  }

  render() {
    const { dir } = this.props;

    return (
      <TouchableOpacity style={[styles.directional, styles[dir]]} onPress={this.handle}>
        <Text><AntDesign name={`caret${dir}`} size={SIZE} color="blue" /></Text>
      </TouchableOpacity>
    );
  }
}

Directional.propTypes = {
  dir: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired
};
