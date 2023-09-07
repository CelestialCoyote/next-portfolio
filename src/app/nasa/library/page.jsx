import Image from 'next/image';
import Link from 'next/link';


const getLibraryData = async () => {
	const date = new Date();
	let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
	//console.log(currentDate)

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


export default async function Apod() {
	const data = await getLibraryData();
	const items = await data.collection.items;
	console.log(data)

	if (!data) return <p>No photo data</p>

	return (
		<div className='flex flex-col m-4'>

			<main className='flex flex-1 flex-col items-center justify-center'>
				<h1 className='text-blue-500 text-4xl'>NASA Image And Video Library</h1>

				{/* <div className='flex flex-row m-8 w-full justify-center'>
					<input
						id='nasaSearch'
						onChange={(e) => setSearch(e.target.value)}
						className='w-3/4'
						type='text'
						placeholder='search for an image'
					/>

					<button
						className='bg-blue-700 w-1/4 ml-6'
						disabled={search == ""}
						onClick={async () => {
							const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
							const preview = await results.json();

							setPhotos(await preview.collection.items);
						}}
					>
						Find
					</button>
				</div> */}

				<div className='grid grid-cols-4 gap-4'>
					{items && items.map((preview) => (
						// <ImagePreview
						// 	key={preview.data[0].nasa_id}
						// 	thumbnailUrl={preview.links[0].href}
						// 	nasaId={preview.data[0].nasa_id}
						// />

						<div key={preview.data[0].nasa_id}>
							<Image
								src={preview.links[0].href}
								width={320}
								height={240}
								className="sm:rounded-t-lg"
								style={{
									maxWidth: "auto",
									height: "100%",
								}}
								placeholder="blur"
								blurDataURL="/spinner.svg"
								alt='thumbnail'
							/>

							<div className='text-white mt-4'>NASA ID: {preview.data[0].nasa_id}</div>
						</div>
					))}
				</div>

				<Link href="/">Back to home</Link>

			</main>
		</div>
	);
};
