export default function MapControl(
	{ 
		meteorOn,
		setMeteorOn,
		volcanoOn,
		setVolcanoOn
	}) {

	return (
		<div className="absolute top-0 right-0 bg-slate-300">
			<h3>Show Maps</h3>

			<div>
				<div className="">
					<input
						className="mr-2"
						type="checkbox"
						checked={meteorOn}
						onChange={() => setMeteorOn(!meteorOn)}
					/>
					<label>Meteor Impact Sites</label>
				</div>

				<div className="">
					<input
						className="mr-2"
						type="checkbox"
						checked={volcanoOn}
						onChange={() => setVolcanoOn(!volcanoOn)}
					/>
					<label>Volcano Sites</label>
				</div>
			</div>

		</div>
	);
}
