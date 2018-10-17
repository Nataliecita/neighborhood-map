import React, { Component }from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs
  (withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 25.7617, lng: -80.1918 }}>
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

export default class Map extends Component{
  render(){
    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCD-DmyxmoXqHbigoPsH5au8muatMsj9q4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />)
  }  

} 

