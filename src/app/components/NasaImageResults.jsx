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
					<div
						key={item.links[0].href}
						className="flex flex-col items-center m-8"
					>
						{/* <Link href={{ pathname: '/about', query: { data: JSON.stringify(episode) } }}></Link> */}
						<Link
							// href={`/nasa/library/image/${item.data[0].nasa_id}`}
							href={{
								pathname: `/nasa/library/image/${item.data[0].nasa_id}`,
								query: { data: JSON.stringify(item) }
							}}
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

						<button
							className="mt-6 border-red-300 border-2"
							onClick={() => {
								setDetails(true);
								setImage(item);
							}}
						>
							Details
						</button>
					</div>
				))}

				{details &&
					<div className="flex flex-col p-8">
						{/* {console.log(image)} */}
						<div className="flex flex-row gap-8 border-2">
							<div className="flex">
								<Image
									className="w-auto h-full"
									src={image.links[0].href}
									alt="thumbnail"
									placeholder="blur"
									blurDataURL={image.links[0].href}
									width="0"
									height="0"
									sizes="100vh"
									priority={true}
								/>
							</div>
							<div className="flex flex-col text-white mt-4 w-1/3">
								<p>NASA ID: {image.data[0].nasa_id}</p>
								<p>Title: {image.data[0].title}</p>
								<p>Photographer: {image.data[0].photographer}</p>
								<p>Location: {image.data[0].location}</p>
								<p>Date Created: {image.data[0].date_created.slice(0, 10)}</p>
								<p>Description: {image.data[0].description}</p>
							</div>
						</div>

						<div>
							<button
								className="mt-10 border-red-300 border-2"
								onClick={() => {
									setDetails(false);
								}}
							>
								Back
							</button>
						</div>
					</div>
				}

			</div>
		</div>
	)

}