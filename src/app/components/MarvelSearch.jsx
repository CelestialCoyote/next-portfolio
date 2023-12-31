"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";


export default function MarvelSearch() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();

		if (!search) return;
		
		router.push(`/marvel/characters/search/${search}`);
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
				placeholder="character name, i.e. Hulk"
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
