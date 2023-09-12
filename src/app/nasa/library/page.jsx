import Image from 'next/image';
import Link from 'next/link';


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
	console.log(data)

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
			<div
				className="
					flex
					flex-wrap
					justify-center
					gap-8
					overflow-y-auto
					no-scrollbar
					mb-6
				"
			>
				{items && items.map((item) => (

					<div
						key={item.data[0].nasa_id}
						className="flex flex-col items-center m-8"
					>
						{/* <Link href={{ pathname: '/about', query: { data: JSON.stringify(episode) } }}></Link> */}
						<Link
							href={`/nasa/library/image/${item.data[0].nasa_id}`}
							as={item.data[0]}
						>
							<div className="flex justify-center h-48">
								<Image
									className="w-auto h-full"
									src={item.links[0].href}
									alt="thumbnail"
									placeholder="blur"
									blurDataURL={item.links[0].href}
									width="0"
									height="0"
									sizes="100vh"
								/>
							</div>
						</Link>

						<div className='text-white mt-4'>
							NASA ID: {item.data[0].nasa_id}
						</div>
					</div>
				))}
			</div>

			<Link
				className="mt-6 border-2 rounded-lg p-4"
				href="/nasa">
				Back to NASA API
			</Link>

		</div>
	);
};
