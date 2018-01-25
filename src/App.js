/* global google */
/* global document */

import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/Login';

let map;
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
