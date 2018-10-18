import React, { Component } from 'react';
import './App.css';
import Map from './component/map'
import SquareAPI from "./API/"
import InfoWindow from "./component/infoWindow"

class App extends Component {

  constructor(){
    super()
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12
    }

  } 

  handleMarkerClick = marker => {
    console.log(marker)
    marker.isOpen = true
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    })
  }

  componentDidMount(){
    console.log("mounted!")
    // fetch data from FourSquare API
    SquareAPI.search({
      near: "Miami, FL",
      query: "vegan",
      limit: 10
    }).then(results => {
      const { venues } = results.response
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true 
        }
      });
      this.setState({venues, center, markers})
     })
  }
       
 // Pass the state of the app to our map and access them as props
  render() {
    return (
      <div className="App">
          <Map {...this.state}
            handleMarkerClick= {this.handleMarkerClick} />
          <InfoWindow />
      </div>
    );
  }
}

export default App;
