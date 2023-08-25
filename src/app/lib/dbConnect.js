import { MongoClient } from 'mongodb'


if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise







// import { MongoClient } from 'mongodb'


// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// };

// const uri = process.env.MONGODB_URI;

// // Connection URL
// //const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'bsc5';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


// import { MongoClient } from 'mongodb';


// if (!process.env.MONGODB_URI) {
// 	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI

// async function main() {
// 	const client = new MongoClient(uri);

// 	try {
// 		// Connect to the MongoDB cluster
// 		await client.connect();

// 		// Make the appropriate DB calls
// 		//await  listDatabases(client);

// 		//await findOneStarByName(client, "Mirfak");

// 		// await findStars(client, {
// 		// 	//name: "",
// 		// 	//hr: "",
// 		// 	constellationAbbreviation: { $in: "Cen" }
// 		// 	//vmag: 3.0,
// 		// });
// 		await findStars(client);

// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		await client.close();
// 	}
// }

// main().catch(console.error);

// async function findOneStarByName(client, starName) {
// 	const result = await client.db("bsc5").collection("starData").findOne({ name: starName });

// 	if (result) {
// 		console.log(`Found star with name: ${starName}`);
// 		console.log(result);
// 	} else {
// 		console.log(`No star found with name of ${starName}`);
// 	}
// };

// async function findStars(client) {
// 	console.log("findStars called");
//}

//async function findStars(client
	//, {
	//name = "",
	//hr = "",
	//constellationAbbreviation = "",
	//vmag = -2.0,
	//numberOfResults = Number.MAX_SAFE_INTEGER
	//} = {}
//) {
	// db.bios.find( {
	// 	birth: { $gt: new Date('1920-01-01') },
	// 	death: { $exists: false }
	//  } )
	//const result = await client.db("bsc5").collection("starData").find({
		//name: starName,
		//hr: starHR,
		//constellationAbbreviation: { $in: "Per" }
		//vmag: { $lte: starMagnitude }
	//})//.sort({ vmag: -1 });

// 	if (result.length > 0) {
// 		console.log(`Found stars with params`);
// 		console.log(result);
// 	} else {
// 		console.log(`No stars found with params`);
// 	}
// };

// async function listDatabases(client) {
// 	const databaseList = await client.db().admin().listDatabases();

// 	console.log(`Databases: ${JSON.stringify(databaseList)}`);
// 	// databaseLiet.database.forEach(db => {
// 	// 	console.log(`- ${db.name}`);

// 	// });
// }