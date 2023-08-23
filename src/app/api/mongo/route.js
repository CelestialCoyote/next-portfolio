import dbConnect from '../lib/dbConnect';
import Star from '../models/Star';


export default async function handler(req, res) {
	const { method } = req

	await dbConnect()

	switch (method) {
		case 'GET':
			try {
				const stars = await Star.find({}) /* find all the data in our database */
				res.status(200).json({ success: true, data: stars })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		case 'POST':
			try {
				const star = await Star.create(
					req.body
				) /* create a new model in the database */
				res.status(201).json({ success: true, data: star })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		default:
			res.status(400).json({ success: false })
			break
	}
}
