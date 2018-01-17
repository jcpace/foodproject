import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <form className='query' onSubmit={this.searchGiphy}>
          <input className='input' type="text" value={this.state.value} onChange={this.handleChange} placeholder='SEARCH' />
        </form>
        <div className='gifList'>
          {this.state.gifs}
        </div>
      </div>
    )
 }
}

// loadMap(){
  
   
//       let latLng = new google.maps.LatLng(this.bookInfo.lat, this.bookInfo.lon);
//       let mapOptions = {
//         center: latLng,
//         zoom: 11,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
  
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
//     }

export default App
