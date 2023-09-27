import Image from 'next/image';
import data from './epicTestData.json';


// const getAPODData = async () => {
// 	const date = new Date();
// 	let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
// 	//console.log(currentDate)

// 	try {
// 		const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${currentDate}`);

// 		if (!response.ok) {
// 			throw new Error("Failed to fetch data");
// 		} else {
// 			console.log("data fetched");
// 		};

// 		return response.json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// };


export default async function Epic() {
	const epicData = data;

	if (!data) return <p>No photo data</p>

	return (
		<div className='min-h-screen border-red-500 border-2'>
			<h1 className='text-3xl text-center mt-4 mb-6'>NASA Epic</h1>

			{epicData && epicData.map(epic => (
				<div
					key={epic.identifier}
					className="flex flex-col text-white border-green-500 border-2"
				>
					<p className="text-purple-500">Identifier: {epic.identifier}</p>
					<p>Caption: {epic.caption}</p>
					<p>Image: {epic.image}</p>
					<p>Version: {epic.version}</p>

				</div>
			))}

		</div>
	);
};
