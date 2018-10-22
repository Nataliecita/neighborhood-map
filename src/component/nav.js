import React, { Component } from 'react'
import menu from '../menu.svg';



class Navbar extends React.Component {

	onHambugerClick = () => {
		//show nav or hide it 
	}


	render(){
		return(
			<div> 
        <a id="menu" className="header__menu">
          <img src={menu} className="" alt="menu" />
    		</a>		
			  <nav id="drawer" className="nav">
			    <ul className="nav__list">
			      <li className="nav__item"><a href="#">News</a></li>
			      <li className="nav__item"><a href="#">Events</a></li>
			      <li className="nav__item"><a href="#">Culture</a></li>
			      <li className="nav__item"><a href="#">Blog</a></li>
			    </ul>
			  </nav>
			</div>
		)
	}
}

export default Navbar