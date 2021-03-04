import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const NavBar = () => {
	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem('token');
		history.push('/');
		window.location.reload();
	}

	const handleLogin = () => {
		history.push('/Login');
	}

	const isLogged =  localStorage.getItem('token')

	return(
		<nav class="navbar">
				<Link to="/">Home</Link>
				<Link to="/Details">Details</Link>
				<Link to="/Characters">Personnages</Link>
				
				{isLogged ? (<LogButton backColor='purple' onClick={handleLogout}>Logout</LogButton>) : <LogButton backColor='pink'  onClick={handleLogin}>Login</LogButton>}
		</nav>
	)
}

const LogButton = styled.button `
	height : 35px;
	font-size : 22px;
	padding-left : 10px;
	padding-right : 10px;
	background-color : ${props => props.backColor};
	font-weight : bold;
	border-radius  : 5px;
	position :absolute;
	right: 15px;
	color: white;
`

export default NavBar;