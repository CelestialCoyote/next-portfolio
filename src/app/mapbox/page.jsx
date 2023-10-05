import MeteorSitesMap from "../components/Map/MeteorSitesMap";


export default async function Mapbox() {
	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] bg-blue-300">
			<div className="text-center">
				Mapbox
			</div>
			<div className="h-screen m-4">
				<MeteorSitesMap />
			</div>
		</div>
	);
};
