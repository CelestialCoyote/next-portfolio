import CharacterCard from "@/app/components/CharacterCard";
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

		<div 
			className="
				flex
				flex-wrap
				justify-center
				gap-8
				overflow-y-auto
				no-scrollbar
				mb-6
			"
		>

			{characters.map(character =>
				<CharacterCard
					key={character.id}
					character={character}
				/>
			)}

		</div>
	);
};
