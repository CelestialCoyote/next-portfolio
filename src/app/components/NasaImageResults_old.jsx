"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NASALibrarySearch from "./NASALibrarySearch";


export default function NasaImageResults({ items }) {
	const [details, setDetails] = useState(false);
	const [image, setImage] = useState([]);

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] w-full items-center">
			{!details && <NASALibrarySearch />}

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

				{!details && items && items.map((item) => (
					<div className='flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400'>
						{/* <Link href={`/images/${item.data[0].nasa_id}`}> */}
							{/* <a className='overflow-hidden bg-black h-96'> */}
								<div className='relative flex-shrink-0 w-full h-48 bg-gray-900'>
									<Image
										src={item.links[0].href}
										alt={`${item.data[0].title}`}
										layout='fill'
										objectFit='cover'
										objectPosition='top'
									/>
								</div>
								<div className='h-48 p-6 bg-black'>
									<p className='text-sm font-medium text-cyan-700'>
										{item.data[0].date_created.slice(0, 10)}
									</p>
									<div className='flex flex-col justify-between h-full'>
										<p className='mt-2 hover:underline line-clamp-3'>
											{item.data[0].title}
										</p>
										<p 
											className='pb-4 text-primary-light lg:hover:underline'
											onClick={() => {
												setDetails(true);
												setImage(item);
											}}
										>
											DETAILS
										</p>
									</div>
								</div>
							{/* </a> */}
						{/* </Link> */}
					</div>
					// <div
					// 	key={item.links[0].href}
					// 	className="flex flex-col items-center m-8"
					// >
					// 	<div className="flex justify-center h-48">
					// 		<Image
					// 			className="w-auto h-full"
					// 			src={item.links[0].href}
					// 			alt="thumbnail"
					// 			placeholder="blur"
					// 			blurDataURL={item.links[0].href}
					// 			width="0"
					// 			height="0"
					// 			sizes="100vh"
					// 		/>
					// 	</div>

					// 	<button
					// 		className="mt-6 border-red-300 border-2"
					// 		onClick={() => {
					// 			setDetails(true);
					// 			setImage(item);
					// 		}}
					// 	>
					// 		Details
					// 	</button>
					// </div>
				))}

				{details &&

					<div className='flex items-center justify-center'>
						<div className='container rounded-lg lg:flex lg:bg-transparent'>
							<div className='relative h-[50vh] mb-4 lg:mb-0 lg:h-auto lg:w-1/2 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400'>
								<a
									//href={image.items[0].href}
									className='rounded-lg lg:hidden focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
								>
									<Image
										src={image.links[0].href}
										title={image.title}
										className='object-contain object-center rounded-lg lg:object-top'
										layout='fill'
										priority={true}
										loading='eager'
										quality={100}
									/>
								</a>
								<div className='hidden lg:sticky lg:block lg:self-start lg:top-10'>
									<a
										href={image.href}
										className='flex-shrink rounded-lg focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
									>
										<img
											src={image.links[0].href}
											title={image.data[0].title}
											loading='eager'
											className='self-center mx-auto rounded-lg'
										/>
									</a>
								</div>
							</div>
							<div className='p-4 overflow-hidden bg-black lg:bg-transparent lg:pt-0 lg:w-1/2'>
								<div>
									<p className='text-2xl font-bold'>
										{image.title}
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
								<div>
									<p className='text-lg leading-loose'>
										{image.data[0].description}
									</p>
								</div>
							</div>
						</div>
						<button
								onClick={() => {
									setDetails(false);
									setImage(item);
								}}
							>
								Back to Search
							</button>
					</div>
					// <div className="flex flex-col p-8">
					// 	<div className="flex flex-row gap-8 border-2">
					// 		<div className="flex">
					// 			<Image
					// 				className="w-auto h-full"
					// 				src={image.links[0].href}
					// 				alt="thumbnail"
					// 				placeholder="blur"
					// 				blurDataURL={image.links[0].href}
					// 				width="0"
					// 				height="0"
					// 				sizes="100vh"
					// 				priority={true}
					// 			/>
					// 		</div>
					// 		<div className="flex flex-col text-white mt-4 w-1/3">
					// 			<p>NASA ID: {image.data[0].nasa_id}</p>
					// 			<p>Title: {image.data[0].title}</p>
					// 			<p>Photographer: {image.data[0].photographer}</p>
					// 			<p>Location: {image.data[0].location}</p>
					// 			<p>Date Created: {image.data[0].date_created.slice(0, 10)}</p>
					// 			<p>Description: {image.data[0].description}</p>
					// 		</div>
					// 	</div>

					// 	<div>
					// 		<button
					// 			className="mt-10 border-red-300 border-2"
					// 			onClick={() => {
					// 				setDetails(false);
					// 			}}
					// 		>
					// 			Back
					// 		</button>
					// 	</div>
					// </div>
				}

			</div>
		</div>
	)

}
