import React, { Component } from 'react';


class ListItem extends Component {
	render() {
		return (
			<li onClick={() => this.props.handleClickItem(this.props)}> {this.props.name}</li>
		);
	}
}

export default ListItem