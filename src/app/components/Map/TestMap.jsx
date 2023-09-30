"use client";


import Map from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";


export default function TestMap() {
	async function fetchLookupTable() {
		const response = await fetch('./mapbox-boundaries-adm1-v4_1.csv', {
			method: 'GET'
		});
		return await response.text();
	}

	return (
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
			initialViewState={{
				longitude: -95.995102,
				latitude: 41.257160,
				zoom: 3
			}}
			mapStyle="mapbox://styles/mapbox/streets-v12"
			style={{ width: "100%", height: 450, borderRadius: 10 }}
		>
		</Map>
	);
};
