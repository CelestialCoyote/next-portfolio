import Link from 'next/link';


export default function Nasa() {

	return (
		<div className='flex flex-col m-4'>

			<div className='flex flex-col items-center mt-10'>
				<h1 className='text-6xl mb-10'>NASA API</h1>

				<div className="flex flex-col items-center mb-8">
					<Link
						className="text-2xl mb-6 text-cyan-500"
						href="/nasa/apod"
					>
						Astronomy Photo of the Day
					</Link>

					<div className="w-2/3">
						<p>
							One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies.
						</p>
					</div>
				</div>

				<div className="flex flex-col">
					<Link
						className="text-2xl mb-6 text-cyan-500"
						href="/nasa/library"
					>
						Image and Video Library
					</Link>
				</div>

			</div>

		</div>
	);
};
