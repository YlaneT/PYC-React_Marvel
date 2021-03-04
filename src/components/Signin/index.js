import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Form = () => {
	const [formState, setFormState] = useState({username: '', password: ''})
	const [errorMessage, setErrorMessage] = useState('')

	// attention, si on n'utilise pas le spread Operator, on ne printera récupérera que le dernier champ modifié.
	useEffect(()=> { console.log("formstate : ", formState)})

	/* Hook permettant d'avoir accès à l'objet history de props même en dehors d'une page gérée par le router */
	const history = useHistory();

	/*	SUBMIT A L'ANCIENNE AVEC LES EVENEMENTS
	/*	console.log(evenement.target);
	//	Print le code HTML du form dans la console
	//	Ancienne méthode contraignante et pas dynamique
	
	
	/* console.log(evenement.target.UN.value);
	console.log(evenement.target.PW.value);
	//	V2 aussi très contraignante
	*/

	/* Submit version React	*/
	const submit = evenement => {
		
		console.log("history : ", history);

		// prévient JS de ne pas utiliser le comportement de base, à savoir raffraichir la page
		evenement.preventDefault();

		if (!formState.username || !formState.password) {
			// Si à la validation, il manque le username ou password
			setErrorMessage("Les champs ne doivent pas être vides");
			return;
		}

		axios({
				method: "POST",
				url:'https://easy-login-api.herokuapp.com/users/login',
				data: {
					username: formState.username,
					password: formState.password
			}
		}).then(res => {
			/* console.log ("resultat : ", res);
			console.log ("headers : ", res.headers);
			console.log ("x-access-token : ", res.headers['x-access-token']); */
			localStorage.setItem('token', res.headers['x-access-token']);
			/* Redirige le user vers la page Characters */
			history.push('/Characters')
		}).catch(err => {
			setErrorMessage("une erreur est survenue, veuillez réessayer plus tard.")
		})
	}

	return (
		<div>
			<StyledTitle>Authentication form</StyledTitle>
			<StyledForm onSubmit={submit} >
			{/* if qui vérifie si les deux champs sont remplis*/}
				<StyledLabel for="UN">Username : </StyledLabel>
			
				<StyledInput type="text" name="UN" onChange={e => setFormState({...formState /* spread Operator */, username : e.target.value})}></StyledInput>

				<StyledLabel for="PW">Password : </StyledLabel>
				<StyledInput type="password" name="PW" onChange={e => setFormState({...formState, password : e.target.value})}></StyledInput>
				<StyledError>{errorMessage}</StyledError>
				<StyledSubmit type="submit" name="Submit">Sign in</StyledSubmit>
			</StyledForm>
		</div>
	);
};





const StyledTitle = styled.h2`
	margin: 5px;
	color: red;
	text-transform: capitalize;
	font-size:30px;
`

const StyledForm = styled.form`
	margin: 5px;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
`

const StyledLabel = styled.label`
	margin: 5px;
	color: blue;
	font-style:italic;
	margin-top : 5px;
`
	
const StyledInput = styled.input`
	margin: 5px;
	border: 2px orangered solid;
	border-radius: 5px;
	background-color : #334;
	height:30px;
	color: white;
`

const StyledSubmit = styled.button`
	margin: 5px;
	border-radius : 5px;
	background-color : #334;
	height: 30px;
	width: 100px;
	color : white;
`

const StyledError = styled.span`
	width : 1000px;
	border-radius : 20px;
	padding : 10px;
	margin: 15px;
	background-color : rgba(50,0,25,0.7);
	color : red;
	text-transform:uppercase;
	font-weight:bold;
	font-size: 200%;
`

export default Form;