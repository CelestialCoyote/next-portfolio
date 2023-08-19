'use client';

import { useState } from 'react';
import axios from 'axios';
import generateMarvelAuthentication from '@/app/marvelAPI/generateMarvelAuthentication';
import SearchBar from "@/app/components/SearchBar/SearchBar";
import CharacterCard from '@/app/components/CharacterCard/CharacterCard';
import CharacterDetails from '@/app/components/CharacterDetails/CharacterDetails';


const SearchCharacters = () => {
	const [characters, setCharacters] = useState([]);
	const [character, setCharacter] = useState();
	const [characterDetails, setCharacterDetails] = useState(false);

	const [searchText, setSearchText] = useState('');

	const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
	const marvelAuth = generateMarvelAuthentication();


	const submitForm = (event) => {
		event.preventDefault();
		searchCharacters();
		setSearchText('');
		console.log(searchText);
	};

	const searchCharacters = async () => {
		console.log("here");

		let url = `${BASE_MARVEL_URL}/characters?nameStartsWith=${searchText}${marvelAuth}`;

		try {
			let comicData = await axios.get(url);

			setCharacters(comicData.data.data.results);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (

		<div>

			<div
				//onSubmit={submitForm}
				className="flex justify-center mt-10"
			>
				<input
					className="text-blue-500 p-2"
					type="text"
					value={searchText}
					placeholder="character name, i.e. Hulk"
					onChange={(event) => setSearchText(event.target.value)}
				/>

				<button
					type="Submit"
					className="ml-6 border-2 p-2"
					onSubmit={submitForm}
				>
					Search</button>
			</div>

			<div>
				{console.log(characters)}

				{/* {!characterDetails &&
					characters.map(character =>
						<CharacterCard
							key={character.id}
							character={character}
							setCharacter={setCharacter}
							setCharacterDetails={setCharacterDetails}
						/>
					)
				}

				{characterDetails &&
					<CharacterDetails
						character={character}
						setCharacterDetails={setCharacterDetails}
					/>
				} */}

			</div>

		</div>

	);
};


export default SearchCharacters;