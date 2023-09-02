//import React from 'react';
import Image from 'next/image';


const CharacterCard = ({ character, setCharacter, setCharacterDetails }) => {
	const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

	return (

		<div className="flex flex-col justify-between w-96 border-2">

			<Image
				className="w-full h-auto"
				src={characterImage}
				alt="character"
				width="0"
				height="0"
				sizes="100vh"
			/>
			<div className="">
				<div className="">
					<p
						className="text-red-500">
						<span className="heading">Marvel ID: </span>
						{character.id}
					</p>
					<p
						className="characterCard_text">
						<span className="heading">Name: </span>
						{character.name}
					</p>
				</div>

				{/* <div className="characterCard_actions">
					<button
						className="characterCard_button"
						onClick={() => {
							setCharacter(character);
							setCharacterDetails(true);
						}}
					>
						Show More
					</button>
				</div> */}
			</div>

		</div>
	);
};


export default CharacterCard;
