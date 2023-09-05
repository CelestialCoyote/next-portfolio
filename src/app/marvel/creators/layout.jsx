import MarvelSearch from "@/app/components/MarvelSearch";


export default function MarvelCreatorsLayout({ children }) {

	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] w-full items-center">
			<MarvelSearch />
			{children}
		</div>
	);
};