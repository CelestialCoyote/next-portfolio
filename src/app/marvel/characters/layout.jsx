import MarvelSearch from "@/app/components/MarvelSearch";


export default function MarvelCharactersLayout({ children }) {

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] w-full items-center">
			{/* <div className="flex justify-center items-center h-20 sticky top-20 z-40 bg-purple-500 w-full mt-6 mb-6"> */}
				<MarvelSearch />
			{/* </div> */}

			{children}
		</div>
	);
};