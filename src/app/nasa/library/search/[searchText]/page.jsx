import Image from 'next/image';
import Link from 'next/link';
import NasaImageResults from '@/app/components/Nasa/NasaImageResults';


export default async function SearchLibrary({ params }) {

	const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${params.searchText}`);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	} else {
		console.log("data fetched");
	};

	const data = await response.json();
	const items = await data.collection.items;

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
