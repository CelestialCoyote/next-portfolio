'use client';

import { useState } from 'react';
import SearchBar from "@/app/components/SearchBar/SearchBar";
import CharacterCard from '@/app/components/CharacterCard/CharacterCard';
import CharacterDetails from '@/app/components/CharacterDetails/CharacterDetails';
//import { StyledSearchCharacters, StyledSearchResults } from "./SearchCharacters.styled";


const SearchCharacters = () => {
	const [characters, setCharacters] = useState([]);
	const [character, setCharacter] = useState();
	const [characterDetails, setCharacterDetails] = useState(false);

	return (

		<div>

			<SearchBar setCharacters={setCharacters} />

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