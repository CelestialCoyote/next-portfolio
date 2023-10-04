//import TestMap from "../components/Map/TestMap";
import MeteorMap from "../components/Map/MeteorsMap";


export default async function Mapbox() {
	return (
		<div className="flex flex-col bg-green-300">
			<div>
				Mapbox
			</div>
			<div className="m-6">
				{/* <TestMap /> */}
				<MeteorMap />
			</div>
		</div>
	);
};
