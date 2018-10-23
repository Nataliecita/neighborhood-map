import React, { Component } from "react";

class SearchBar extends Component {

  // handleChange = () => {
  //   this.props.onUserInput(
  //     this.refs.filterTextInput.value,
  //   );
  // }
  render() {
    return (

        <input
          type={"search"}
          placeholder="Search venue..."
          id={"search"}
          // value={this.props.filterText}
          // ref="filterTextInput"
          // onChange={this.handleChange}
        />

    );
  }
 }

export default SearchBar;