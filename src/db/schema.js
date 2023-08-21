import mongoose from "mongoose";


const starSchema = new mongoose.Schema({
	HR: String,
	HIP: String,
	IAU_Name: String,
	Bayer: String,
	Flamsteed: String,
	Bayer_Flamsteed: String,
	Constellation_Abbreviation: String,
	Vmag: String,
	HD: String,
	SAO: String,
	RA2000_hms: String,
	DE2000_dms: String,
	GLON: String,
	GLAT: String,
	SpType: String,
	DM: String,
	FK5: String,
	RA1900_hms: String,
	DE1900_dms: String,
});

const star = mongoose.model('Star') || mongoose.model('Star', starSchema);


export default star;
