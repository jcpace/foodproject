import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      vendors: [],
      value: ''
    }
  }
  componentDidMount() {
   
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }
  render () {
    return (
      <div>
        <form className='query' onSubmit={}>
          <input className='input' type='text' value={this.state.value} onChange={this.handleChange} placeholder='SEARCH' />
        </form>
        <div className=''>
          {}
        </div>
      </div>
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
