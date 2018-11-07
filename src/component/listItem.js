import React, { Component } from 'react';


class ListItem extends Component {
	render() {
		return (
			<li onClick={() => this.props.handleClickItem(this.props)} role="link" tabIndex="0"> {this.props.name}</li>
		);
	}
}

export default ListItem