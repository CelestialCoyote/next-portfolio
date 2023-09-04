export default function MarvelCharactersLayout({ children }) {

	return (
		<div className="flex flex-col border-red-400 border-2">
			<div className="flex justify-center h-20 sticky top-20 z-40">
				<div className="flex justify-center items-center bg-purple-500 w-full mt-6 mb-6">
					<label className="text-2xl">Search Bar Here</label>
				</div>
			</div>
			<div className="h-96 overflow-y-auto no-scrollbar border-yellow-400 border-2">
				{children}
			</div>
		</div>
	);
};