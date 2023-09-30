import TestMap from "../components/Map/TestMap";


export default async function Epic() {
	return (
		<div className="flex flex-col bg-green-300">
			<div>
				Mapbox
			</div>
			<div>
				<TestMap />
			</div>
		</div>
	);
};
