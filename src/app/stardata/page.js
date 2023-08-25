import clientPromise from "../lib/dbConnect";


export async function getData() {
	try {
		const client = await clientPromise;
		const db = client.db("bsc5").collection("starData");

		const stars = await db
			.find({})
			// .find(
			// 	{
			// 		"constellationAbbreviation": "Cen",
			// 		"vmag": { $lte: 2.5 }
			// 	}
			// )
			.sort({ vmag: -1 })
			.toArray();

		console.log(stars);

		return stars;

	} catch (e) {
		console.error(e);
	}
};


export default async function Stars() {
	const stars = await getData();

	return (
		<div>
			<h1 className="text-3xl text-blue-500 mb-10">Bright Stars</h1>
			<div>
				{stars && stars.map((star) => (
					<div
						key={star._id}
						className="mb-6 text-green-400"
					>
						<h2>Star Name: {star.name}</h2>
						<p>IAU Approved Name: {star.iauAppoved ? "true" : "false"}</p>
						<p>HR: {star.hr}</p>
						<p>HIP: {star.hip}</p>
						<p>Bayer: {star.bayer}</p>
						<p>Flamsteed: {star.flamsteed}</p>
						<p>Bayer/ Flamsteed: {star.bayerFlamsteed}</p>
						<p>Constellation: {star.constellation}</p>
						<p>Constellation Abbrev: {star.constellationAbbreviation}</p>
						<p>Visual Magnitude: {star.vmag}</p>
					</div>
				))}
			</div>
		</div>
	);
}
