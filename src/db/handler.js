exports.starData = async (req, res, next) => {
	try {
		let data = await this.starData.find();
		
		return res.status(200).json(data);
		
	} catch (error) {
		return next(error);
	}
};