//import Link from 'next/link';
import dbConnect from '../lib/dbConnect';
import Star from '../models/Star';


const getStarData = async () => {
	await dbConnect();

	try {
		const result = await Star.find({});

		const stars = result.map((doc) => {
			const star = doc.toObject();
			star._id = star._id.toString();

			return star;
		});

		console.log("fetching star data");
		console.log(stars);

		return stars;
	}
	catch (err) {
		console.log(err.message);

		return false;
	}

	/* find all the data in our database */
	//const result = await Star.find({})

	// const stars = result.map((doc) => {
	// 	const star = doc.toObject();
	// 	star._id = star._id.toString();

	// 	return star;
	// });

	//return result.json();
}


export default async function StarData() {
	const stars = await getStarData();

	return (
		<div>
			{stars.map((star) => {
				return (
					<div key={star._id}>
						<div className="">
							<h5 className="">Name: {star.name}</h5>
							<div className="main-content">
								<p className="">HR: {star.hr}</p>
								<p className="">HIP: {star.hip}</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
};
