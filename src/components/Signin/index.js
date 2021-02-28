import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Form = () => {
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');

	const Submit = evenement => {
		evenement.preventDefault();
		// prévient JS de ne pas utiliser le comportement de base, à savoir raffraichir la page
		useEffect(() => {
			console.log("username : ", username);
			console.log("password : ", password);
		})
		/*	console.log(evenement.target);
		//	Print le code HTML du form dans la console
		//	Ancienne méthode contraignante et pas dynamique
		*/
	
		/* console.log(evenement.target.UN.value);
		console.log(evenement.target.PW.value);
		//	V2 aussi très contraignante
		*/
	}

	
	return (
		<div>
			<StyledTitle>Authentification form</StyledTitle>
			<StyledForm onSubmit={Submit} >
			{/* if qui vérifie si les deux champs sont remplis*/}
				<StyledLabel for="UN">Username : </StyledLabel>
				<StyledInput type="text" name="UN" onSubmit={e => setUsername(e.target.value)}></StyledInput>

				<StyledLabel for="PW">Password : </StyledLabel>
				<StyledInput type="password" name="PW" onSubmit={e => setPassword(e.target.value)}></StyledInput>

				<StyledSubmit type="submit" name="Submit">Sign in</StyledSubmit>
			</StyledForm>
			{/* <form onSubmit={(e) => {
				
				e.preventDefault();
			}}>
				<label for="UN">Username : </label>
				<input type="text" id="UN" name="UN"/>
				<br/>
				<label for="PW">Password : </label>
				<input type="password" id="PW" name="PW"/>

				<button type="submit">Login</button>			
			</form> */}
		</div>
	);
};





const StyledTitle = styled.h2`
	color: red;
	text-transform: capitalize;
	font-size:20px;
`

const StyledForm = styled.form`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
`

const StyledLabel = styled.label`
	color: blue;
	font-style:italic;
	margin-top : 5px;
`
	
const StyledInput = styled.input`
	border: 2px orangered solid;
	border-radius: 5px;
	background-color : #334;
	color: white;
`

const StyledSubmit = styled.button`
	margin: 5px;
	border-radius : 5px;
	background-color : #334;
	color : white;
`

export default Form;