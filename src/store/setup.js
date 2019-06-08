import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './configStore';
import App from '../../App';

export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configStore(),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
