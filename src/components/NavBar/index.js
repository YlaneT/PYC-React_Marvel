import React from 'react'
import {Link} from "react-router-dom";


  const NavBar = () => {
		return(
			<nav class="navbar">
				<Link to="/">Home</Link>
				<Link to="/Details">Details</Link>
				<Link to="/Characters">Personnages</Link>
			</nav>
		)
  }

  export default NavBar;