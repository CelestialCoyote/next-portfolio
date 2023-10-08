"use client";


import { useEffect, useState } from 'react';
import Map, { Layer, Source, Marker, Popup } from 'react-map-gl';
import MapControl from './MapControl';
import MeteorMarkers from './MapMarkers/meteorMarkers';
import meteors from '@/app/data/meteor.json';
import volcanoes from '@/app/data/volcano.json';
import "mapbox-gl/dist/mapbox-gl.css";


export default function MeteorSitesMap() {
	const [meteor, setMeteor] = useState(null);
	const [meteorOn, setMeteorOn] = useState(false);
	const [volcano, setVolcano] = useState(null);
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
				mapStyle="mapbox://styles/mapbox/streets-v12"
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
					meteors={meteors}
					meteor={meteor}
					setMeteor={setMeteor}
					meteorOn={meteorOn}
				/>

				{volcanoOn && volcanoes.features.map((volcano, index) => (
					<Marker
						key={index}
						latitude={volcano.geometry.coordinates[1]}
						longitude={volcano.geometry.coordinates[0]}
						onClick={e => {
							e.originalEvent.stopPropagation();
							setVolcanoSite(volcanoSite);
						}}
					>
						<img
							className="rounded-md w-5 h-5 cursor-pointer"
							src="/volcano.png"
							alt="Volcano Icon"
						/>
					</Marker>
				))}

				{volcano && (
					<Popup
						anchor="bottom"
						latitude={volcano.geometry.coordinates[1]}
						longitude={volcano.geometry.coordinates[0]}
						onClose={() => {
							setVolcano(null);
							console.log('pupup closed');
						}}
					>
						<div className="flex flex-col text-black bg-slate-200">
							<div className="flex">
								<p className="font-bold mr-2">
									Name:
								</p>
								{volcano.properties.NAME_}
							</div>
							<div className="flex">
								<p className="font-bold mr-2">
									Location:
								</p>
								{volcano.properties.LOCATION}
							</div>
							{/* <div className="flex">
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
						</div> */}
						</div>
					</Popup>
				)}

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
