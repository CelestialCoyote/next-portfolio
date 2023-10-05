"use client";


import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import meteors from '../../data/meteor.json'
import asteroidImage from '../../images/asteroid.png';


export default function MeteorSitesMap() {
	const [meteorSite, setMeteorSite] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setMeteorSitek(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

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
				//console.log(meteorSite.properties.crater_name)
				//console.log(meteorSite.geometry.coordinates[0])

				<Popup
					anchor="bottom"
					latitude={meteorSite.geometry.coordinates[1]}
					longitude={meteorSite.geometry.coordinates[0]}
					onClose={() => {
						setMeteorSite(null);
						console.log('pupup closed')
					}}
				>
					{meteorSite.properties.crater_name}
				</Popup>
			)}
		</Map>
	);
};
