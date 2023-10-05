"use client";


import { useState } from 'react';
import Map, { Layer, Marker, Popup, Source } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import nationalParkBoundaries from '../../../data/NPS_Boundaries01.geojson';
import meteors from '../../../data/meteor.json';
import asteroidImage from '../../../images/asteroid.jpg';


export default function TestMap() {
	const [meteorSite, setMeteorSite] = useState(null);
	// const parkBoundaries = ({
	// 	id: 'nps',
	// 	type: 'fill',
	// 	source: {
	// 		type: 'geojson',
	// 		nationalParkBoundaries
	// 	},
	// 	layout: {},
	// 	paint: {
	// 		'fill-color': '#ff00ff',
	// 		'fill-opacity': 0.9
	// 	}
	// });

	// const meteorSites = ({
	// 	id: 'meteor-layer',
	// 	type: 'circle',
	// 	source: 'meteors',
	// 	paint: {
	// 		'circle-radius': 4,
	// 		'circle-stroke-width': 2,
	// 		'circle-color': 'red',
	// 		'circle-stroke-color': 'white'
	// 	}
	// });

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
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
			initialViewState={{
				longitude: -95.995102,
				latitude: 41.257160,
				zoom: 3
			}}
			mapStyle="mapbox://styles/mapbox/streets-v12"
			style={{ width: "100%", height: 640, borderRadius: 10 }}
		>
			{/* <Source
				id="nationalParkBoundaries"
				type="geojson"
				data={nationalParkBoundaries}
			>
				<Layer {...parkBoundaries} />
			</Source> */}

			{/* <Source
				id="meteor-locations"
				type="geojson"
				data={meteors}
			>
				<Layer {...meteorSites} />
			</Source> */}

			{meteors.features.map((meteor, index) => (
				<Marker
					key={index}
					latitude={meteor.geometry.coordinates[1]}
					longitude={meteor.geometry.coordinates[0]}
				>
					<button
						className="bg-transparent cursor-pointer w-7 h-7"
						onClick={e => {
							e.preventDefault();
							setMeteorSite(meteor);
						}}
					>
						<img src={asteroidImage} alt="Asteroid Icon" />
					</button>
				</Marker>
			))}

			{meteorSite && (
				console.log(meteorSite.properties.crater_name)
				//console.log(meteorSite.geometry.coordinates[0])

				// <Popup
				// 	anchor="bottom"
				// 	latitude={meteorSite.geometry.coordinates[1]}
				// 	longitude={meteorSite.geometry.coordinates[0]}
				// 	onClose={() => setMeteorSite(null)}
				// >
				// 	<div className="">
				// 		{meteorSite.properties.crater_name}
				// 	</div>
				// </Popup>
			)}
		</Map>
	);
};
