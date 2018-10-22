import React, { Component } from 'react';
import './App.css';
import Map from './component/map'
import SquareAPI from "./API/"
import Navbar from "./component/nav"
import MenuContainer from "./component/menuContainer"



class App extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13

    } 
  }

  handleMarkerClick = (marker) => {
    this.closeAllMarkers()
    marker.isOpen = true
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    })

    const venue = this.state.venues.find(venue => venue.id === marker.id)

    SquareAPI.getVenueDetails(marker.id).then(res => {
      const venueCopy = Object.assign(venue, res.response.venue)
      this.setState({ venues: Object.assign(this.state.venues, venueCopy)})
      // console.log(venueCopy)
    })
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker
    })
    this.setState({markers: Object.assign(this.state.markers, markers)})
  }

  componentDidMount(){
    console.log("mounted!")
    // fetch data from FourSquare API
    SquareAPI.search({
      near: "Miami, FL",
      query: "beer",
      limit: 2
    }).then(results => {
      const { venues } = results.response
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        }
      });
      this.setState({venues, center, markers})
     })
  }
       
 // Pass the state of the app to our map and access them as props
  render() {
    return (
      <div className="App">
        <div id="container">

          <MenuContainer />
        </div> 
       <Map {...this.state} handleMarkerClick= {this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;
