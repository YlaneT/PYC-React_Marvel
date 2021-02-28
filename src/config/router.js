import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link
  } from "react-router-dom";

  import Login from "../screens/Login"
  import Characters from "../screens/Characters"
  import Details from "../screens/Details"

  const Routes = () => {
	  return (
		  <Router>
			  <Switch>
			  <Route exact path="/Login" component = {Login}/>
			  <Route exact path="/Characters" component = {Characters}/>
			  <Route exact path="/Details" component = {Details}/>

				<Redirect to="Login"/>

			  </Switch>
		  </Router>
	  )
  }

export default Routes;