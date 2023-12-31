"use client";


import { useState } from 'react';
import Map from 'react-map-gl';
import MapControl from './MapControl';
import MeteorMarkers from './MapMarkers/meteorMarkers';
import VolcanoMarkers from './MapMarkers/volcanoMarkers';
import "mapbox-gl/dist/mapbox-gl.css";


export default function MeteorSitesMap() {
	const [meteorOn, setMeteorOn] = useState(false);
	const [volcanoOn, setVolcanoOn] = useState(false);

	const earthquakes = ({
		'id': 'earthquakes-layer',
		'type': 'circle',
		'source': 'earthquakes',
		'paint': {
			'circle-radius': 4,
			'circle-stroke-width': 2,
			'circle-color': 'red',
			'circle-stroke-color': 'white'
		}
	});

	return (
		<>
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				initialViewState={{
					longitude: -95.995102,
					latitude: 41.257160,
					zoom: 3
				}}
				// mapStyle="mapbox://styles/mapbox/streets-v12"
				mapStyle="mapbox://styles/celestialcoyote/clni9lajn084401qbahu19g4g"
				style={{ borderRadius: 10 }}
			>
				{/* <Source
					id="earhtquakes"
					type="geojson"
					data={'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'}
				>
					<Layer {...earthquakes} />
				</Source> */}

				<MeteorMarkers
					meteorOn={meteorOn}
				/>

				<VolcanoMarkers
					volcanoOn={volcanoOn}
				/>

				<MapControl
					meteorOn={meteorOn}
					setMeteorOn={setMeteorOn}
					volcanoOn={volcanoOn}
					setVolcanoOn={setVolcanoOn}
				/>
			</Map>
		</>
	);
};
