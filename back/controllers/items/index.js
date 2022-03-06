const fs = require('fs');
const Fuse = require('fuse.js');
const options = {
	keys: ['name']
}

/**
 * Gets all items list filtered by search param and category_id if sent.
 * @param {*} req
 * @param {*} res
 */
const get = async (req, res) => {
	try {
		const { search, category_id } = req.query;
		let items = JSON.parse(fs.readFileSync('data/items.json'))
		const fuse = new Fuse(items, options);

		if (search) {
			const fuseSearch = fuse.search(search);
			if (fuseSearch.length) {
				items = fuseSearch.map((i) => i.item);
			}
		}

		if (category_id) {
			items = items.filter(item => item.category_id === Number(category_id));
		}

		res.send(items);
	} catch (e) {
		console.error(e);
		res.sendStatus(400);
	}
};

module.exports = {
	get
};
