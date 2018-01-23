/*global google*/

import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/Login';

let map;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }
  initMap() {
    this.map = new google.maps.Map(document.getElementsByClassName('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  render() {
    return (
      <div>
        <Login />
        <div className='map'>{this.map}</div>
      </div>
    );
  }
}

export default App;
