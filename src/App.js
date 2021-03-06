import React, { Component } from 'react';
import './App.css';
import Map from './component/map'
import SquareAPI from "./API/"
import MenuContainer from "./component/menuContainer"


class App extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13,
      filterText: "",
      markerSelected: false
    } 
  }


  handleMarkerClick = (marker) => {
    this.closeAllMarkers()
    marker.isOpen = true

    // marker.setAnimation(window.google.maps.Animation.BOUNCE);

    this.setState({
      markers: Object.assign(this.state.markers, marker),
    })

    const venue = this.state.venues.find(venue => venue.id === marker.id)

    SquareAPI.getVenueDetails(marker.id).then(res => {
      const venueCopy = Object.assign(venue, res.response.venue)
      this.setState({ 
        venues: Object.assign(this.state.venues, venueCopy),
        // center: Object.assign({
        //         // Tell the map to center itself north of markers actual coordinates so there's enough screen space for infowindow.  
        //         lat: (marker.lat + 0.009),
        //         lng: marker.lng
        //     })

      })
    })
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker
    })
    this.setState({markers: Object.assign(this.state.markers, markers)})
  }

  handleClickItem = (venue) => {
    const marker = this.state.markers.find(marker => marker.id === venue.id)
    this.handleMarkerClick(marker)
  }

  handleChange = event => {
    const input = event.target.value

    this.setState({filterText: input})
    const markers = this.state.venues.map( venue => {
      const isMatched = venue.name
        .toLowerCase()
        .includes(input.toLowerCase())

      const marker = this.state.markers.find(marker => marker.id === venue.id)
      if(isMatched){
        marker.isVisible = true
      } else{
        marker.isVisible = false
      }
      return marker
    })

    this.setState({markers: markers} )
  }

  componentDidMount(){
    window.gm_authFailure = () => {
      alert(`ERROR: Failed to load Google Map`)
      console.log(`ERROR: Failed to load Google Map`)
    }

    console.log("mounted!")
    // fetch data from FourSquare API
    SquareAPI.search({
      near: "Miami, FL",
      query: "beer",
      limit: 6
    }).then(results => {
      const { venues } = results.response
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id, 
        }
      });
      this.setState({venues, center, markers})
     })
  }


 // Pass the state of the app to our map and access them as props
  render() {
    return (
      <div className="App">
        <div id="container" aria-haspopup="true">

          <MenuContainer  {...this.state} handleClickItem={this.handleClickItem} handleChange={this.handleChange}/>
        </div> 
        <Map {...this.state} handleMarkerClick= {this.handleMarkerClick} />


              {/* Data provided by FourSquare */}

      </div>
    );
  }
}

export default App;
