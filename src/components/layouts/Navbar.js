import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{

	return(
		<div className="navbar">
			<Link to="/" className="navbar_logo">Github<span style={{color:'#1abc9c'}}>Hunt</span></Link>
			<ul className="navbar_menus">
				<li className="navbar_menus-item">
					<Link to="/" className="navbar_menus-link">Home</Link>
				</li>
				<li className="navbar_menus-item">
					<Link to="/about" className="navbar_menus-link">About</Link>
				</li>
				<li className="navbar_menus-item">
					<a href="https://github.com/Bshal" target="_blank" rel="noopener" style={{marginLeft:'15px'}} className="navbar_menus-link bg_primary">My Github Profile</a>
				</li>
			</ul>
		</div>
	)

}

export default Navbar;