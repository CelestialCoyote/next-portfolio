import CreatorCard from "@/app/components/CreatorCard";
import generateMarvelAuthentication from "@/utils/generateMarvelAuthentication";


const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public';
const marvelAuth = generateMarvelAuthentication();


const getCreatorData = async () => {
	const generateRandomLetter = () => {
		const alphabet = "abcdefghijklmnopqrstuvwxyz"

		return alphabet[Math.floor(Math.random() * alphabet.length)]
	}

	try {
		const response = await fetch(`${BASE_MARVEL_URL}/creators?nameStartsWith=${generateRandomLetter()}${marvelAuth}`);
		//const response = await fetch(`${BASE_MARVEL_URL}/creators?nameStartsWith=jack${marvelAuth}`);

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


export default async function SearchCreators() {
	const marvelData = await getCreatorData();
	const creators = marvelData.data.results;

	return (

		<div className="flex flex-wrap justify-center gap-8 overflow-y-auto no-scrollbar mb-6">

			{creators.map(creator =>
				<CreatorCard
					key={creator.id}
					creator={creator}
				/>
			)}

		</div>
	);
};
