'use client';

import { useState } from 'react';
import CharacterCard from '@/app/components/CharacterCard/CharacterCard';
import CharacterDetails from '@/app/components/CharacterDetails/CharacterDetails';


async function getData() {
	const res = await fetch(`/api/marvel/?nameStartsWith=${"a"}`)
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
};


export default async function SearchCharacters() {
	const [characters, setCharacters] = useState([]);
	const [character, setCharacter] = useState();
	const [characterDetails, setCharacterDetails] = useState(false);

	const [searchText, setSearchText] = useState('');

	const data = await getData();
	console.log(data.data.results);
	//setCharacters(data);

	// const searchMarvel = (event) => {
	// 	event.preventDefault();
	// 	getCharacters();
	// 	setSearchText('');
	// };

	// const getCharacters = () => {
	// 	fetch(`/api/marvel/?nameStartsWith=${searchText}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setCharacters(data.data.results)
	// 		});
	// };

	// const getCharacters = () => {
	// 	fetch(`/api/marvel/?nameStartsWith=${"a"}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setCharacters(data.data.results)
	// 		});
	// };

	return (
		<div>
			{data}
			{/* <div
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

			<div className="flex flex-wrap justify-center mt-10 gap-8">

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

			</div> */}

		</div>
	);
};
