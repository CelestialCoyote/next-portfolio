import Image from "next/image";


export default function NasaImageDetails({ image, setDetails }) {

	return (
		<div className='flex flex-col bg-slate-600 m-2'>
			<div className="flex gap-6">
				<div
					className="
						flex
						w-1/2
						items-center
					"
				>
					<Image
						className="w-full h-auto"
						src={image.links[0].href}
						alt="thumbnail"
						placeholder="blur"
						blurDataURL={image.links[0].href}
						width="0"
						height="0"
						sizes="100vh"
					/>
				</div>

				<div
					className="
						w-1/2
						overflow-hidden 
					"
				>
					<div className="">
						<p className='text-2xl font-bold'>
							{image.data[0].title}
						</p>
					</div>
					<div>
						<p className='py-2 font-light text-gray-500'>
							{image.data[0].date_created.slice(0, 10)}
						</p>
					</div>
					<hr className='pt-1 pb-2 border-gray-900' />
					<div>
						<p className='inline mr-1 text-lg text-gray-400'>Keywords:</p>
						<div className='inline'>
							{image?.keywords?.map((keyword, index) => (
								<Link href={`/images?q=${keyword}`} key={index}>
									<a className='text-lg rounded-md cursor-pointer text-primary-light hover:underline'>
										{keyword},{' '}
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className='py-4'>
						<div>
							<p className='inline text-lg text-gray-400'>
								Secondary Creator:{' '}
							</p>
							<p className='inline'>
								{image.data[0].secondary_creator}
							</p>
						</div>
					</div>
					<div className='pb-4'>
						<div>
							<p className='inline text-lg text-gray-400'>NASA ID: </p>
							<p className='inline'>{image.data[0].nasa_id}</p>
						</div>
					</div>
					<div className='pb-4'>
						<div>
							<p className='inline text-lg text-gray-400'>Center: </p>
							<p className='inline'>{image.data[0].center}</p>
						</div>
					</div>
					
					<hr className='pt-1 pb-2 border-gray-900' />
					
					<div className="h-96 p-6 overflow-y-scroll">
						{image.data[0].description}
					</div>
				</div>
			</div>

			<button
				onClick={() => {
					setDetails(false);
				}}
			>
				Back to Search
			</button>
		</div>
	)
}
