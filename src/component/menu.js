import React, { Component } from "react";
import "../Menu.css";
import SearchBar from "./searchBar";
import ListItem from "./listItem";
 
class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredMarkers: []
    }
  }

  displayFilteredResults = () => {
    const markersFiltered = this.props.markers.filter(marker =>{
      
      marker.isVisible === true
    })

    this.setState({filteredMarkers: Object.assign(this.state.fileteredMarkers, markersFiltered)}) 
  }

  // console.log(`after ${filteredMarkers}`)

  // console.log(this.props.venues)
  // console.log(this.props.markers)
  // console

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