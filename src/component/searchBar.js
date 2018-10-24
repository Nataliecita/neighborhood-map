import React, { Component } from "react";

class SearchBar extends Component {

  handleChange2 = () => {
    // this.props.onUserInput(
    //   this.refs.filterTextInput.value,
    // );
    this.props.displayFilteredResults()
  }

  
  render() {
    return (

        <input
          type={"search"}
          placeholder="Search venue..."
          id={"search"}
          // value={this.props.filterText}
          // ref="filterTextInput"
          onChange={this.props.handleChange}
        />

    );
  }
 }

export default SearchBar;