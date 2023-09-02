//"use client";


//import { useState } from "react";
import CharacterCard from "@/app/components/CharacterCard/CharacterCard";
import CharacterDetails from "@/app/components/CharacterDetails/CharacterDetails";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const marvelAuth = generateMarvelAuthentication();


const getCharacterData = async () => {
	try {
		const response = fetch(`${BASE_MARVEL_URL}/characters?nameStartsWith=i${marvelAuth}`)
			// .then((res) => res.json())
			// .then(data => {
			// 	console.log("Successfully got character data");
			// 	//setCharacters(data.data.results)
			// 	//console.log(`data: ${data.data.results}`);
			// 	//return data.data.results;
			// });

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		};

		console.log(`response.json(): ${response.json()}`);
		return response.json();
		//return response;
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
	//setCharacters(getCharacterData());
	console.log(`characters: ${characters}`);

	return (
		<div className="flex flex-col">
			<label
				className="text-2xl text-blue-400"
			>
				Marvel Data
			</label>
			{/* <div className="mt-8">
				{characters.map(character => <p>{character.name}</p>)}
			</div> */}

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
			</div> */}

			<div className="flex flex-wrap justify-center mt-10 gap-8">

				{/* {!characterDetails &&
					characters.map(character =>
						<CharacterCard
							key={character.id}
							character={character}
							setCharacter={setCharacter}
							setCharacterDetails={setCharacterDetails}
						/>
					)}
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
