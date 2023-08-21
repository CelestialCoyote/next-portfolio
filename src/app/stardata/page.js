import main from "../../db/connection";
import star from "../database/schema";


export default function get_Stars(req, res) {
	main().catch(error => console.error(error));

	
}





// import { getStarData } from "@/api/mongo/stardata";


// const handler = async (req, res) => {
// 	if (req.method === 'GET') {
// 		try {
// 			const { stardata, error } = await getStarData();

// 			if (error) throw new Error(error);

// 			return res.status(200).json({ stardata });
// 		} catch (error) {
// 			return  res.status(500).json({ error: error.message });
// 		}
// 	}

// 	res.setHeader('Allow', ['GET']);
// 	res.status(425).end(`Method ${req.method} is not allowed.`);
// }


// export default handler;
