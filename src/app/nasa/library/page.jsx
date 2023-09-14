import Image from 'next/image';
import Link from 'next/link';
import NasaImageResults from '@/app/components/NasaImageResults';


const getLibraryData = async () => {
	try {
		const response = await fetch("https://images-api.nasa.gov/search?media_type=image");

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

			<Link
				className="mt-6 border-2 rounded-lg p-4"
				href="/nasa">
				Back to NASA API
			</Link>

		</div>
	);
};
