import React, { Component } from 'react'
import './App.scss'
import Login from './components/login/Login'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      vendors: [],
      value: ''

    }
  }

  

  render () {
    return (

      <Login />

    )
  }
}

// loadMap(){

//       let latLng = new google.maps.LatLng(this.bookInfo.lat, this.bookInfo.lon);
//       let mapOptions = {
//         center: latLng,
//         zoom: 11,6
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }

//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

//     }

export default App
