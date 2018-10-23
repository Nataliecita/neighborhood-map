import React, { Component } from "react";
import "../Menu.css";
import SearchBar from "./searchBar";
import ListItem from "./listItem";
 
class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredMarkers: [],
      venuesFiltered: []
    }
  }

  displayFilteredResults = () => {
    const markersFiltered = this.props.markers.filter(marker => marker.isVisible === true)

    this.setState({filteredMarkers: Object.assign(this.state.filteredMarkers, markersFiltered)}) 
      

    const venuesFiltered = this.props.venues.map(venue => {
       this.state.filteredMarkers.filter(filteredMarker => venue.id === filteredMarker.id)
    })

    console.log(venuesFiltered)
  }

  displayFilteredResults()


  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
           <SearchBar />
        <ul>

          <ol> <ListItem /></ol>
          <ol> <ListItem /></ol>
        </ul>

      </div>
    );
  }
}
 
export default Menu;