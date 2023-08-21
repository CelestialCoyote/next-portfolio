'use client';

import { useState } from 'react';
import CharacterCard from '@/app/components/CharacterCard/CharacterCard';
import CharacterDetails from '@/app/components/CharacterDetails/CharacterDetails';


const SearchCharacters = () => {
	const [characters, setCharacters] = useState([]);
	const [character, setCharacter] = useState();
	const [characterDetails, setCharacterDetails] = useState(false);

	const [searchText, setSearchText] = useState('');


	const searchMarvel = (event) => {
		event.preventDefault();
		getCharacters();
		setSearchText('');
	};

	const getCharacters = () => {
		fetch(`/api/marvel/?nameStartsWith=${searchText}`)
			.then((res) => res.json())
			.then((data) => {
				//setCharacters(data.data.results)
				setCharacters(data);
			});
	};

	return (
		<div>

			<div
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
					onClick={searchMarvel}
				>
					Search</button>
			</div>

			<div>

				{!characterDetails &&
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
				}

			</div>

		</div>

	);
};


export default SearchCharacters;