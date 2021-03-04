import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Form = () => {
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');

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

		evenement.preventDefault();
		// prévient JS de ne pas utiliser le comportement de base, à savoir raffraichir la page
		/* useEffect(() => {
			console.log("username : ", username);
			console.log("password : ", password);
		}) */
		axios({
				method: "POST",
				url:'https://easy-login-api.herokuapp.com/users/login',
				data: {
					username: username,
					password: password
			}
		}).then(res => {
			console.log (res);
			console.log (res.headers);
			console.log(res.headers['x-access-token']);
			localStorage.setItem('token', res.headers['x-access-token']);
			/* Redirige le user vers la page Characters */
			history.push('/Characters')
		}).catch(err => {
			console.log("err : " , err)
		})
	}

	// eslint-disable-next-line no-lone-blocks
	{/* 
		return (<form onSubmit={(e) => {
				
				e.preventDefault();
			}}>
				<label for="UN">Username : </label>
				<input type="text" id="UN" name="UN"/>
				<br/>
				<label for="PW">Password : </label>
				<input type="password" id="PW" name="PW"/>

				<button type="submit">Login</button>			
			</form>) 
	*/}

	return (
		<div>
			<StyledTitle>Authentication form</StyledTitle>
			<StyledForm onSubmit={submit} >
			{/* if qui vérifie si les deux champs sont remplis*/}
				<StyledLabel for="UN">Username : </StyledLabel>
				<StyledInput type="text" name="UN" onChange={e => setUsername(e.target.value)}></StyledInput>

				<StyledLabel for="PW">Password : </StyledLabel>
				<StyledInput type="password" name="PW" onChange={e => setPassword(e.target.value)}></StyledInput>

				<StyledSubmit type="submit" name="Submit">Sign in</StyledSubmit>
			</StyledForm>
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
	height:30px;
	color: white;
`

const StyledSubmit = styled.button`
	margin: 15px;
	border-radius : 5px;
	background-color : #334;
	height: 30px;
	width: 100px;
	color : white;
`

export default Form;