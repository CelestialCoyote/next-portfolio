"use client";


import Map from 'react-map-gl';


export default function TestMap() {
	//console.log(process.env.MAPBOX_TOKEN)
	
	return (
		<Map
			initialViewState={{
				longitude: -95.995102,
				latitude: 41.257160,
				zoom: 3
			}}
			mapStyle="mapbox://styles/mapbox/streets-v12"
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
		>
		</Map>
	);
};
