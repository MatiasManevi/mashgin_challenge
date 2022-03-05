const fs = require('fs');

const get = async (_, res) => {
	try {
		const categories = JSON.parse(fs.readFileSync('data/categories.json'))
		res.send(categories);
	} catch (e) {
		console.error(e);
		res.sendStatus(400);
	}
};

module.exports = {
	get
};
