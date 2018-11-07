
import React, { Component }from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Animation} from "react-google-maps"

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
          .map((visibleMarker, index, arr) => {
      
            const venueInfo = props.venues.find(venue => venue.id === visibleMarker.id)

            
            return(
              <Marker 
              key={index} 
              tabIndex="0"
              position={{ lat: visibleMarker.lat, lng: visibleMarker.lng }}
              onClick= {() =>props.handleMarkerClick(visibleMarker)} 

                animation={ arr.length === 1 ? window.google.maps.Animation.BOUNCE:  window.google.maps.Animation.DROP}   
                
                // ADD CONDITIONAL!! If there is a selected marker give a certain animation otherwise dont; 


                // animation = {props.markerSelected === true ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP }
                >
                {visibleMarker.isOpen && venueInfo.bestPhoto && (
                  <InfoWindow>
                  <React.Fragment>
                    <img src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt={`Venue: ${venueInfo.name}`}/>
                    <h2> {venueInfo.name}</h2>
                    <p> {venueInfo.location['address']}</p>
                    {venueInfo.price && <p> Price: {venueInfo.price['message']}</p>}
                    {venueInfo.rating && <p> Rating: {venueInfo.rating}</p>}

                  </React.Fragment> 
                  </InfoWindow>
                )}
              </Marker>  
            )
        })}
    </GoogleMap>
  ))
);

// animation={window.google.maps.Animation.DROP}  


export default class Map extends Component{
  render(){
    return(

      <MyMapComponent
        { ...this.props }

        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCD-DmyxmoXqHbigoPsH5au8muatMsj9q4"
        loadingElement={<div style={{ height: `92%` }} />}
        containerElement={<div style={{ height: `92vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        role="navigation"
        aria-label= "map"
      />

    )
  }  

} 

