import Link from 'next/link';


export default function NasaImage({ searchParams }) {
	console.log(`data: ${JSON.stringify(searchParams)}`);

	return (
		<div className='flex flex-col flex-1 w-screen m-4 border-2'>

			<h1 className='text-4xl text-center mt-8 mb-10'>NASA Image</h1>

			<div className='flex flex-col items-center mt-10'>
				{searchParams.data}
			</div>

		</div>
	);
};
