import React, { Component } from "react";

class SearchBar extends Component {
  
  render() {
    return (

        <input
          type={"search"}
          placeholder="Search venue..."
          id={"search"}
          aria-label={"Search Venues"}
          onChange={this.props.handleChange}
        />

    );
  }
 }

export default SearchBar;