import React, { Component } from "react";
import "../Menu.css";
import SearchBar from "./searchBar";
import ListItem from "./listItem";
 
class Menu extends Component {
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
         {this.props.venues && this.props.venues.map((venue, index) => <ListItem  key={index} { ...venue } handleClickItem={this.props.handleClickItem} />)} 
        </ul>

        Information provided by FourSquare
      </div>
    );
  }
}  
 
export default Menu;