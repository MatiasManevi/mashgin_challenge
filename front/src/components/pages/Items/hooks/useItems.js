import React from 'react';
import qs from 'qs';

import API from 'utils/apiGateway';

const useItems = () => {
	const [items, setItems] = React.useState([]);
	const search = new URLSearchParams(window.location.search).get('search');
	const category_id = new URLSearchParams(window.location.search).get('category_id');

	React.useEffect(async () => {
		const query = qs.stringify({ category_id, search });
		try {
			API.getItems(query).then(setItems);
		} catch (e) {
			console.error({ e });
		}
	}, [search, category_id]);

	return { items };
};

export default useItems;
