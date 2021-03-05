import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import privateKey from '../.secret'
import axios from 'axios';
import md5 from 'md5'

const Characters = () => {

	const [charactersList, setCharactersList] = useState([]);
	useEffect(() => {
		const publicKey = '2ea57d1757f01667226216eef775111c';
		const timeStamp = new Date().getMilliseconds();
		const generatedUrl = 'https://gateway.marvel.com/v1/public/characters';
		const hash = md5(`${timeStamp}${privateKey}${publicKey}`)

		axios({
			method: 'GET',
			url : generatedUrl,
			params: {
				ts	:	timeStamp,
				apikey:	publicKey,
				hash:	hash
			}
		}).then(res => {
			console.log("res : ", res);
			console.log("res : ", res.data.data.results);
			setCharactersList(res.data.data.results)
		}).catch(err => {
			console.log(err);
		})
	},[])


	return (
		<div>
			<h1>CHARACTERS</h1>
			<CharactersList>
				{charactersList.map(character => (
					<Character>
						<CharName>{character.name}</CharName>
						<CharDesc>{character.description}</CharDesc>
					</Character>
				))}
			</CharactersList>
		</div>
	);
};
const CharactersList = styled.div`
	display: grid;
	grid-template-columns: 70%;
	justify-content : center;
	align-items:center;
`

const Character = styled.div`
	min-width : 400px;
	height:auto;
	margin: 25px;
	padding: 25px;
	border: red solid 5px;
	border-radius : 20px;
	background-color : rgba(0,0,0, 0.6);
	align-content:center;
`

const CharName = styled.h2`
	position:center;
	color: white;
	text-transform: uppercase;
`

const CharDesc = styled.p`
	color: white;
	text-align:center;
	font-size:20px;
`

export default Characters;