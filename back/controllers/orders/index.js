const fs = require('fs');

/**
 * Adds a new order into the orders list
 * @param {*} req
 * @param {*} res
 */
const post = async (req, res) => {
	try {
		const newOrder = req.body;
		const orders = JSON.parse(fs.readFileSync('data/orders.json'))
		orders.push(newOrder);
		fs.writeFileSync("data/orders.json", JSON.stringify(orders))

		res.send(orders);
	} catch (e) {
		console.error(e);
		res.sendStatus(400);
	}
};

module.exports = {
	post
};
