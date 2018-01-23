/* global google */
/* global document */

import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      map: undefined,
    };
  }
  componentDidMount() {
    this.initMap();
  }
  initMap = () =>{
    this.setState({
      map: new google.maps.Map(document.getElementsByClassName('mapp'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      }),
    });
  }

  render() {
    return (
      <div>
        <Login />
        <div className="mapp">{this.map}</div>
      </div>
    );
  }
}

export default App;
