import React, { Component } from 'react'

import SquareAPI from "../API/"


class InfoWindow extends React.Component {

  state = {
  	open: true
  }

	openWindow = () => {
		// this.setState({ open })
	}


	render(){
		return(

			<div> {this.state.open} </div>
		)
	}
}

export default InfoWindow