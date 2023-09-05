import Image from 'next/image';


const CreatorCard = ({ creator }) => {
	const creatorImage = `${creator.thumbnail.path}.${creator.thumbnail.extension}`;

	return (

		<div className="flex flex-col justify-between w-96 h-96 border-purple-400 border-2">

			<div className="flex justify-center h-72">
				<Image
					className="w-auto h-full"
					src={creatorImage}
					alt="creator"
					placeholder="blur"
					blurDataURL={creatorImage}
					width="0"
					height="0"
					sizes="100vh"
				/>
			</div>

			<div className="">
				<div className="">
					<p
						className="text-blue-400">
						<span className="heading">Marvel ID: </span>
						{creator.id}
					</p>
					<p
						className="characterCard_text">
						<span className="heading">Name: </span>
						{creator.fullName}
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


export default CreatorCard;
