import MeteorSitesMap from "../components/Map/MeteorSitesMap";


export default async function Mapbox() {
	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] bg-blue-500">
			<div className="h-screen m-4">
				<MeteorSitesMap />
			</div>
		</div>
	);
};
