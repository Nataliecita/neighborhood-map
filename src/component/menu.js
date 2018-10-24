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

  // componentDidMount(){
  //   this.displayFilteredResults()
  // }

  // Update the state of the venues filtered based on the markers who are visible, which will depend on the search item. This function is called on every change from the search box
  displayFilteredResults = () => {
    const markersFiltered = this.props.markers.filter(marker => marker.isVisible === true)

    this.setState({filteredMarkers: Object.assign(this.state.filteredMarkers, markersFiltered)})       

    const venuesFiltered = this.state.filteredMarkers.map(marker => {
       return this.props.venues.find(venue => venue.id === marker.id)
    })
    // console.log(venuesFiltered)
    this.setState({venuesFiltered: Object.assign(this.state.venuesFiltered, venuesFiltered)})

  }






  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>

          <SearchBar displayFilteredResults={this.displayFilteredResults} handleChange = {this.props.handleChange} />

        <ul>
        {
        // tried looping over this.state.filteredVenues, however becasue the function that updated filtered venues is only called after there is on change in the search box, it starts being empty in the beginning
        }
           {this.props.venues && this.props.venues.map((venue, index) => <ListItem  key={index} { ...venue } handleClickItem={this.props.handleClickItem} />)} 
      
        </ul>

      </div>
    );
  }
}
 
export default Menu;