import React, { Component } from 'react'
import './App.scss'
import Login from './components/login/Login'

const URL = 
class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      vendors: [],
      value: ''

    }
  }

  login = () => {
    gifURLArray = []
    axios.get(giphyTrendingURL, {params: {
      api_key: API_KEY,
      limit: 15
    }})
    .then(response => {
      let imageArrTrending = response.data.data
      imageArrTrending.forEach(item => {
        gifURLArray.push(item.images.downsized.url)
      })
      let gifs = gifURLArray.map((gif, i) => { 
        return <img src={gif} alt='' key={i} /> 
      })
      this.setState({
        gifs: gifs
      })
    })
    .catch(error => {
      console.log('Axios ERROR: ', error)
    })
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
