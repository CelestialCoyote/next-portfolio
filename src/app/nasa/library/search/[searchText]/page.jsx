import Image from 'next/image';
import Link from 'next/link';


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
		<div className='grid grid-cols-4 gap-4'>
			{items && items.map((preview) => (

				<div
					key={preview.data[0].nasa_id}
					className="mb-8"
				>
					<div className="flex justify-center h-72">
						<Image
							className="w-auto h-full"
							src={preview.links[0].href}
							alt="thumbnail"
							placeholder="blur"
							blurDataURL={preview.links[0].href}
							width="0"
							height="0"
							sizes="100vh"
						/>
					</div>

					<div className='text-white mt-4'>
						NASA ID: {preview.data[0].nasa_id}
					</div>
				</div>
			))}
		</div>
	);
};
