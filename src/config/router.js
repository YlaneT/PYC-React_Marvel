import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import NavBar from "../components/NavBar"

import Home from "../screens/Home"
import Login from "../screens/Login"
import Details from "../screens/Details"
import Characters from "../screens/Characters"
import PrivateRoute from "../utils/privateRoute"

  const Routes = () => {
	  return (
		  <Router>
			  <NavBar/>
			  <Switch>
			  <Route exact path="/" component = {Home}/>
			  <Route exact path="/Login" component = {Login}/>
			  <PrivateRoute exact path="/Characters" component = {Characters}/>
			  <PrivateRoute exact path="/Details" component = {Details}/>

				<Redirect to="/"/>

			  </Switch>
		  </Router>
	  )
  }

export default Routes;