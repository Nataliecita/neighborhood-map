import React, { Component } from 'react';
import './App.css';
import Map from './component/map'
import SquareAPI from "./API/"
// import SquareAPI2 from "./API/fourSquareAPI"

class App extends Component {
  // set initial state of map
  constructor() {
    super()
    this.state = {
        venues: [],
        center: [],
        markers: [],
        zoom: 13
      }
  }

  componentDidMount(){
    console.log("mounted!")
    // fetch data from FourSquare API
    SquareAPI.search({
      near: "Miami, FL",
      query: "vegan",
      limit: 10
    }).then( results => {
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        const { markers } = venues.map( venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true
          }
        })
        // console.log(results)
        this.setState({ venues, center, markers })

    })
  }

  // componentDidMount(){
  //   console.log("mounted!")
  //   SquareAPI2.getVenues({
  //     near: "Miami, FL",
  //     query: "vegan",
  //     limit: 10
  //   }).then(results => console.log(results))
  // }

  render() {
    return (
      <div className="App">
          <Map { ...this.state } />

      </div>
    );
  }
}

export default App;
