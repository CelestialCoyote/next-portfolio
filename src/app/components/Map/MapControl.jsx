export default function MapControl(
	{ 
		meteor,
		setMeteor,
		volcano,
		setVolcano
	}) {

	return (
		<div className="absolute top-0 right-0 bg-slate-300">
			<h3>Show Maps</h3>

			<div>
				<div className="">
					<input
						className="mr-2"
						type="checkbox"
						checked={meteor}
						onChange={() => setMeteor(!meteor)}
					/>
					<label>Meteor Impact Sites</label>
				</div>

				<div className="">
					<input
						className="mr-2"
						type="checkbox"
						checked={volcano}
						onChange={() => setVolcano(!volcano)}
					/>
					<label>Volcano Sites</label>
				</div>
			</div>

		</div>
	);
}
