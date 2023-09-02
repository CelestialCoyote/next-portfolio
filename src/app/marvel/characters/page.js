// 'use client';

// import { useState } from 'react';
// import CharacterCard from '@/app/components/CharacterCard/CharacterCard';
// import CharacterDetails from '@/app/components/CharacterDetails/CharacterDetails';

//export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const marvelAuth = generateMarvelAuthentication();


const getCharacterData = async () => {
	try {
		//let url = `${BASE_MARVEL_URL}/characters?name=hulk${marvelAuth}`;
		//console.log(url);
		//const response = await fetch(url)

		const response = fetch(`${BASE_MARVEL_URL}/characters?nameStartsWith=i${marvelAuth}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data.results);
				//setCharacters(data.data.results)
				//setCharacters(data)
			});


		if (!response.ok) {
			throw new Error("Failed to fetch data");
		};

		console.log(response);
		return response;
		//return NextResponse.json(response);
	} catch (error) {
		console.log(error);
	}
};

// const getCharacterData = () => {
// 	fetch(`${BASE_MARVEL_URL}/characters?nameStartsWith=i${marvelAuth}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data.data.results);
// 			//setCharacters(data.data.results)
// 			//setCharacters(data)
// 		});
// };


export default async function SearchCharacters() {
	//const [characters, setCharacters] = useState([]);
	//const [character, setCharacter] = useState();
	//const [characterDetails, setCharacterDetails] = useState(false);

	//const [searchText, setSearchText] = useState('');


	// async function getData() {
	// 	const res = await fetch(`/api/marvel/?nameStartsWith=a`)
	// 	// The return value is *not* serialized
	// 	// You can return Date, Map, Set, etc.

	// 	if (!res.ok) {
	// 		// This will activate the closest `error.js` Error Boundary
	// 		throw new Error('Failed to fetch data')
	// 	}

	// 	return res.json()
	// };

	//const data = await getData();
	//console.log(data.data.results);
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
	// 	fetch(`/api/marvel/?nameStartsWith=${"b"}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			//setCharacters(data.data.results)
	// 			setCharacters(data)
	// 		});
	// };

	const characters = getCharacterData();
	//console.log(characters);

	return (
		<div className="flex flex-col">
			<label
				className="text-2xl text-blue-400"
			>
				Marvel Data
			</label>
			<div className="mt-8">
				{JSON.stringify(characters)}
			</div>

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
