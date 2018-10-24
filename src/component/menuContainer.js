/*

ACKNOWLDGEMENT: Toggable menu item from: 
https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
*/


import React, { Component } from "react";
import MenuButton from './menuButton'
import Menu from './menu'
import SearchBar from "./searchBar";
 
class MenuContainer extends Component {
  
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleFilterVenues = () => {
    if(this.props.filterText !== ""){
      const venues = this.props.venues.filter(venue => venue.name
        .toLowerCase()
        .includes(this.props.filterText.toLowerCase()))
        return venues;
    }
    // In case there is no search you still return the starting venues
    return this.props.venues
  }
 
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }
 
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  } 

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>

        <Menu menuVisibility={this.state.visible} {...this.props}
        handleClickItem={this.props.handleClickItem} handleChange={this.props.handleChange} venues = {this.handleFilterVenues()}/>
      </div>
    );
  }
}
 
export default MenuContainer;