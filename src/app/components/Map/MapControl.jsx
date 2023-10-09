export default function MapControl(
	{ 
		meteorOn,
		setMeteorOn,
		volcanoOn,
		setVolcanoOn
	}) {

	return (
		<div
			className="
				absolute
				top-2
				right-2
				text-blue-500
				rounded-lg
				p-4
				bg-slate-300
			"
		>
			<h3 className="text-lg">Map Layers</h3>

			<div className="mt-2">
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
