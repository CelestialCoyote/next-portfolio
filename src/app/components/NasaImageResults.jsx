"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function NasaImageResults({ items }) {
	const [details, setDetails] = useState(false);
	const [image, setImage] = useState([]);

	return (
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
					{console.log(item)}
					{/* {console.log(item.links)} */}
					{/* <Link href={{ pathname: '/about', query: { data: JSON.stringify(episode) } }}></Link> */}
					<Link
						href={`/nasa/library/image/${item.data[0].nasa_id}`}
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

					{/* {details &&
						<div className="flex flex-col text-white mt-4">
							<p>NASA ID: {item.data[0].nasa_id}</p>
							<p>Title: {item.data[0].title}</p>
							<p>Photographer: {item.data[0].photographer}</p>
							<p>Location: {item.data[0].location}</p>
							<p>Date Created: {item.data[0].date_created.slice(0, 10)}</p>
							<p>Description: {item.data[0].description}</p>
						</div>
					} */}

					<button
						className="mt-6 border-red-300 border-2"
						onClick={() => {
							setDetails(true);
							setImage(item.data[0]);
						}}
					>
						Details
					</button>
				</div>
			))}

			{details &&
				<div>
					<p>NASA ID: {image.nasa_id}</p>
					<button
						className="mt-6 border-red-300 border-2"
						onClick={() => {
							setDetails(false);
						}}
					>
						Back
					</button>
				</div>
			}

		</div>
	)

}