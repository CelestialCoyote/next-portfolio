import NasaImageResults from '@/app/components/NasaImageResults';


const getLibraryData = async () => {
	const generateRandomTopic = () => {
		const topics = [
			"neil armstrong",
			"apollo",
			"space shuttle",
			"artemis",
			"voyager",
			"pluto",
			"supernova"
		]

		return topics[Math.floor(Math.random() * (topics.length))]
	}


	try {
		let query = generateRandomTopic();

		const response = await fetch(
			`https://images-api.nasa.gov/search?q=${query}&media_type=image`
		);

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


export default async function Library() {
	const data = await getLibraryData();
	const items = await data.collection.items;
	//console.log(items)

	if (!data) return <p>No photo data</p>

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] w-full items-center">
			<div
				className="
				flex
				flex-col
				items-center
				overflow-y-auto
				no-scrollbar
				mb-6
			"
			>
				<NasaImageResults items={items} />
			</div>
		</div>
	);
};
