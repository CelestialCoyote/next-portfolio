"use client";


import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import meteors from '../../../data/meteor.geojson';
//import meteorImage from '../../../images/meteor.jpg'


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;


const MeteorMap = () => {
	const mapContainerRef = useRef(null);
	const [map, setMap] = useState(null);

	// Initialize map when component mounts
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [-95.9345, 41.2565],
			zoom: 3
		});

		map.on('load', () => {
			map.loadImage(
				'../../../images/meteor.jpg',
				function (error, image) {
					if (error) throw error;
					map.addImage('Icon', image);
				}
			);

			map.addSource('meteors', {
				'type': 'geojson',
				'data': meteors
			});

			map.addLayer({
				'id': 'meteors',
				'type': 'symbol',
				'source': 'meteors',
				"minzoom": 2.5,
				"maxzoom": 24,
				'layout': {
					'visibility': 'none',
					'icon-allow-overlap': true,
					'icon-image': 'icon',
					"icon-size": ['interpolate', ['linear'], ['zoom'],
						2, 0.35,
						4, 0.45,
						8, 0.55,
						12, .7
					]
				},
			});

		});

		//setMap(map);
		//});

		// Clean up on unmount
		//return () => map.remove();
	}, []);



	return (
		<div
			ref={mapContainerRef}
			className="map-container"
		/>
	);
};


export default MeteorMap;
