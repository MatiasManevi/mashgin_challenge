import React from 'react';

import API from 'utils/apiGateway';

const useCategories = () => {
	const [categories, setCategories] = React.useState([]);

	React.useEffect(async () => {
		try {
			API.getCategories().then(setCategories);
		} catch (e) {
			console.error({ e });
		}
	}, []);

	return { categories };
};

export default useCategories;
