"use client";


import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import meteors from '@/app/data/meteor.json'


export default function MeteorSitesMap() {
	const [meteorSite, setMeteorSite] = useState(null);

	// useEffect(() => {
	// 	const listener = e => {
	// 		if (e.key === "Escape") {
	// 			setMeteorSite(null);
	// 		}
	// 	};
	// 	window.addEventListener("keydown", listener);

	// 	return () => {
	// 		window.removeEventListener("keydown", listener);
	// 	};
	// }, []);

	return (
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
			initialViewState={{
				longitude: -95.995102,
				latitude: 41.257160,
				zoom: 3
			}}
			mapStyle="mapbox://styles/mapbox/streets-v12"
			style={{ borderRadius: 10 }}
		>

			{meteors.features.map((meteor, index) => (
				<Marker
					key={index}
					latitude={meteor.geometry.coordinates[1]}
					longitude={meteor.geometry.coordinates[0]}
					onClick={e => {
						// If we let the click event propagates to the map, it will immediately close the popup
						// with `closeOnClick: true`
						e.originalEvent.stopPropagation();
						setMeteorSite(meteor);
					}}
				>
					<img
						className="rounded-md w-5 h-5"
						src="/asteroid.png"
						alt="Asteroid Icon"
					/>
					{/* <button
						className="bg-transparent cursor-pointer"
						onClick={e => {
							e.preventDefault();
							setMeteorSite(meteor);
						}}
					>
						<img
							className="rounded-md w-5 h-5"
							src="/asteroid.png"
							alt="Asteroid Icon"
						/>
					</button> */}
				</Marker>
			))}

			{/* {meteorSite ? (
				//console.log(meteorSite.properties.crater_name)
				//console.log(meteorSite.geometry.coordinates)

				<Popup
					latitude={meteorSite.geometry.coordinates[1]}
					longitude={meteorSite.geometry.coordinates[0]}
					onClose={() => {
						setMeteorSite(null);
						console.log('pupup closed');
					}}
				>
					<div className="text-black">
						{meteorSite.properties.crater_name}
					</div>
				</Popup>
			) : null} */}

			{meteorSite && (
				//console.log(meteorSite.properties.crater_name)
				//console.log(meteorSite.geometry.coordinates)

				<Popup
					anchor="bottom"
					latitude={meteorSite.geometry.coordinates[1]}
					longitude={meteorSite.geometry.coordinates[0]}
					onClose={() => {
						setMeteorSite(null);
						console.log('pupup closed');
					}}
				>
					<div className="flex flex-col text-black bg-slate-200">
						<div className="flex">
							<p className="font-bold mr-2">
								Name:
							</p>
							{meteorSite.properties.crater_name}
						</div>
						<div className="flex">
							<p className="font-bold mr-2">
								State:
							</p>
							{meteorSite.properties.state}
						</div>
						<div className="flex">
							<p className="font-bold mr-2">
								Country:
							</p>
							{meteorSite.properties.country}
						</div>
						<div className="flex">
							<p className="font-bold mr-2">
								Target Rock:
							</p>
							{meteorSite.properties.target_rock}
						</div>
						<div className="flex">
							<p className="font-bold mr-2">
								Diameter (km):
							</p>
							{meteorSite.properties.diameter_km}
						</div>
						<div className="flex">
							<p className="font-bold mr-2">
								Age (millions years ago):
							</p>
							{meteorSite.properties.age_millions_years_ago}
						</div>
					</div>
				</Popup>
			)}
		</Map>
	);
};
