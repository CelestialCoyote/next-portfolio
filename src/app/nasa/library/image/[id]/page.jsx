import Link from 'next/link';
import Image from 'next/image';


const getData = async (nasa_id) => {
	try {
		const response = await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		} else {
			console.log(`data fetched: nasa id ${nasa_id}`);
		};

		return response.json();
	} catch (error) {
		console.log(error);
	}
};


export default async function NasaImage({ params }) {
	//console.log(`searchParams: ${JSON.stringify(searchParams)}`);
	console.log(`nasa id: ${params.id}`);
	const imageData = await getData(params.id);
	const image = await imageData.collection.items[1];

	console.log(imageData);

	return (
		<div className='flex flex-col flex-1 w-screen m-4 border-2'>

			<h1 className='text-4xl text-center mt-8 mb-10'>NASA Image</h1>

			<div className='flex flex-col items-center mt-10'>
				{/* {params.id} */}
				<div className="flex justify-center">
					<Image
						className="w-auto h-full"
						src={image.href}
						alt="thumbnail"
						placeholder="blur"
						blurDataURL={image.href}
						width="0"
						height="0"
						sizes="100vh"
					/>
				</div>
				<div className="flex flex-col text-white mt-4">
					<p>NASA ID: {image.nasa_id}</p>
					<p>Title: {image.title}</p>
					<p>Photographer: {image.photographer}</p>
					<p>Location: {image.location}</p>
					<p>Date Created: {image.date_created}</p>
					<p>Description: {image.description}</p>
				</div>
			</div>

		</div>
	);
};
