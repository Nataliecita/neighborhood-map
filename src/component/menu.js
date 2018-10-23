import React, { Component } from "react";
import "../Menu.css";
import SearchBar from "./searchBar";
 
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
           <SearchBar />
        <ul>
          <ol> somethin</ol>
          <ol> something2</ol>
        </ul>

      </div>
    );
  }
}
 
export default Menu;