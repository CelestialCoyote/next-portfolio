import CharacterCard from "@/app/components/CharacterCard/CharacterCard";
import CharacterDetails from "@/app/components/CharacterDetails/CharacterDetails";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const marvelAuth = generateMarvelAuthentication();


const getCharacterData = async () => {
	const generateRandomLetter = () => {
		const alphabet = "abcdefghijklmnopqrstuvwxyz"

		return alphabet[Math.floor(Math.random() * alphabet.length)]
	}

	try {
		const response = await fetch(`${BASE_MARVEL_URL}/characters?nameStartsWith=${generateRandomLetter()}${marvelAuth}`);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		} else {
			console.log("data fetched");
		};

		return response.json();
	} catch (error) {
		console.log(error);
	}
};


export default async function SearchCharacters() {
	const marvelData = await getCharacterData();
	const characters = marvelData.data.results;

	return (
		<div className="flex flex-col">
			<label
				className="text-2xl text-blue-400"
			>
				Marvel Data
			</label>
			{/* <div className="mt-8">
				{characters.map((character, index) => <p key={index}>{character.name}</p>)}
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

				{characters.map(character =>
					<CharacterCard
						key={character.id}
						character={character}
					//setCharacter={setCharacter}
					//setCharacterDetails={setCharacterDetails}
					/>
				)}


				{/* {characters &&
					<CharacterDetails
						character={character}
						setCharacterDetails={setCharacterDetails}
					/>
				} */}

			</div>

		</div>
	);
};
