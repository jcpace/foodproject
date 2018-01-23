import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: [],
      value: '',
    };
  }

  render() {
    return (
    <Login />;
    {map}
    )
  }
}

let map;
initMap = () => {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

export default App;
