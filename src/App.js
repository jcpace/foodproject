import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/Login';

let map;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: [],
      value: '',
    };
  }
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  render() {
    return (
      <div>
        <Login />
        <div>{map}</div>
      </div>
    );
  }
}

export default App;
