import clientPromise from ".";


let client;
let db;
let stardata;

async function init() {
	if (db) return;

	try {
		client = await clientPromise;
		db = await client.db();
		stardata = await db.collection('stardata');
	} catch (error) {
		throw new Error('Failed to establish connection to database');
	}
}

;(async () => {
	await init();
})();


export async function getStarData() {
	try {
		if (!stardata) await init();

		const result = await stardata
			.find({})
			.limit(20)
			.map(user => ({ ...user, _id: user.id.toString() }))
			.toArray();

		return { stardata: result };
	} catch (error) {
		return { error: 'Failed to fetch stardata.'};
	}
};
