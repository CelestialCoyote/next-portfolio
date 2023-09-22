"use client";

import { useEffect, useState } from "react";


export default function NASALibrarySearch({ getSearchResults }) {
	const [search, setSearch] = useState("");


	useEffect(() => {
		const getImages = async () => {
			const response = await fetch('/api/nasa/library');
			const data = await response.json();
			console.log(data);
			setItems(data.collection.items);
		}

		getImages();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(`/api/nasa/library?query=${search}`)
		const data = await response.json()

		getSearchResults(data);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full px-12 mb-8 gap-12 mt-6"
		>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="subject i.e. Space Shuttle"
				className="w-full h-14 pl-6 rounded-lg placeholder-gary-500 outline-none bg-transparent border-red-300 border-2"
			/>
			<button
				disabled={!search}
				type="submit"
				className="w-24 rounded-lg text-amber-600 disabled:text-gray-400 border-green-300 border-2"
			>
				Search
			</button>
		</form>
	);
};
