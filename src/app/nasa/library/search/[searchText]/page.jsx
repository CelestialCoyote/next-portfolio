"use client";

import { useEffect, useState } from 'react';
import NASALibrarySearch from '@/app/components/Nasa/NasaLibraryISearch';
import NasaImageResults from '@/app/components/Nasa/NasaImageResults';


export default function SearchLibrary() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('/api/nasa/library');
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
				<NASALibrarySearch getSearchResults={(results) => setItems(results)} />
				<NasaImageResults items={items} />
			</div>
		</div>
	);
};
