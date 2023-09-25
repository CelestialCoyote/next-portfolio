"use client";

import { useEffect, useState } from 'react';
import NASAImageSearch from '@/app/components/Nasa/NasaImageSearch';
import NasaImageResults from '@/app/components/Nasa/NasaImageResults';


export default function NasaImage() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('/api/nasa/image');
			const data = await response.json();
			
			console.log(`search data: ${data}`);
			setItems(data.collection.items);
		}

		getData();
	}, []);

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] w-full items-center">
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
				<NASAImageSearch getSearchResults={(results) => setItems(results)} />
				<NasaImageResults items={items} />
			</div>
		</div>
	);
};
