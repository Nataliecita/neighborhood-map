/*

ACKNOWLDGEMENT: Toggable menu item from: 
https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
*/


import React, { Component } from "react";
import MenuButton from './menuButton'
import Menu from './menu'
 
class MenuContainer extends Component {
  
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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
        <Menu menuVisibility={this.state.visible} />
      </div>
    );
  }
}
 
export default MenuContainer;