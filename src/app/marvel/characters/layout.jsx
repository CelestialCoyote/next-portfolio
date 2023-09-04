export default function MarvelCharactersLayout({ children }) {

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)]">
			<div className="flex justify-center items-center h-20 sticky top-20 z-40 bg-purple-500 w-full mt-6 mb-6">
				<label className="text-2xl">Search Bar Here</label>
			</div>

			{children}
		</div>
	);
};