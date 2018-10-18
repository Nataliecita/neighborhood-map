import React, { Component }from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

// pass in new props with the data from the square api
const MyMapComponent = withScriptjs(
  withGoogleMap((props) =>(
    <GoogleMap
      defaultZoom={13} 
      zoom={props.zoom} 
      defaultCenter={{ lat: 25.7617, lng: -80.1918 }} 
      center= {{ lat:parseFloat(props.center.lat), lng: parseFloat(props.center.lng) }}
    >
        {props.markers && 
          props.markers
          // show markers that are visible 
          .filter(marker => marker.isVisible)
          .map((visibleMarker, index) => (
            <Marker key={index} position={{ lat: visibleMarker.lat, lng: visibleMarker.lng }}
              onClick= {() =>props.handleMarkerClick(visibleMarker)}> 
              {visibleMarker.isOpen && (
                <InfoWindow>
                <p> meow</p>
                </InfoWindow>
              )}
            </Marker>  
        ))}
    </GoogleMap>
  ))
);


export default class Map extends Component{
  render(){
    return(

      <MyMapComponent
        { ...this.props }

        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCD-DmyxmoXqHbigoPsH5au8muatMsj9q4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    )
  }  

} 

