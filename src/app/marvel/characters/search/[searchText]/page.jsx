import CharacterCard from "@/app/components/CharacterCard";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const marvelAuth = generateMarvelAuthentication();


export default async function SearchCharacters({ params }) {

	const response = await fetch(`${BASE_MARVEL_URL}/characters?nameStartsWith=${params.searchText}${marvelAuth}`);

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	} else {
		console.log("data fetched");
	};

	const marvelData = await response.json();
	const characters = marvelData.data.results;

	return (

		<div className="flex flex-wrap justify-center gap-8 overflow-y-auto no-scrollbar mb-6">

			{characters.map(character =>
				<CharacterCard
					key={character.id}
					character={character}
				/>
			)}

		</div>
	);
};
