import clientPromise from "../lib/dbConnect";


export async function getData() {
	try {
		const client = await clientPromise;
		const db = client.db("bsc5");

		const stars = await db
			.collection("starData")
			.find({})
			// .limit(20)
			.toArray();

		console.log(stars);
		return {
			props: { stars: JSON.parse(JSON.stringify(stars)) },
		};
	} catch (e) {
		console.error(e);
	}
}


export default function Stars({ stars }) {
	return (
		<div>
			<h1>Bright Stars</h1>
			<ul>
				{stars.map((star) => (
					<li key={star._id}>
						<h2>Star Name: {star.name}</h2>
						<p>HR: {star.hr}</p>
						<p>HIP: {star.hip}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
