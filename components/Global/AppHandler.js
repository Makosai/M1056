import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

export const AppContext = React.createContext();

export default class AppHandler extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {

    };

    this.data = {
      memes: '',
      updateState: this.updateState.bind(this),
      getState: this.getState.bind(this)
    };

    this.context = AppContext;
  }

  updateState = (subState, value, refresh) => {
    if (refresh) {
      const state = {};
      state[subState] = value;
      this.setState(state);
      return;
    }
    return update(this.state[subState], { $set: value });
  };

  getState = () => this.state;

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={this.data}>
        {children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Child => (
  props => (
    <AppContext.Consumer>
      {context => <Child {...props} context={context} /> }
    </AppContext.Consumer>
  )
);
