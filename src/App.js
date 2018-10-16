import React, { Component } from 'react';
import './App.css';
import Map from './component/map'
import SquareAPI from "./API/"

class App extends Component {
  componentDidMount(){
    console.log("mounted!")
    SquareAPI.search({
      near: "Miami, FL",
      query: "vegan",
      limit: 10
    }).then(results => console.log(results))
  }


  render() {
    return (
      <div className="App">
          <Map />

      </div>
    );
  }
}

export default App;
