import React from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';

const useSearchForm = () => {
	const [query, setQuery] = React.useState('');
	const history = useHistory();
	const category_id = new URLSearchParams(window.location.search).get('category_id');

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?${qs.stringify({ category_id, search: query })}`);
	};

	return {
		handleInputChange,
		handleSubmit,
		query
	};
};

export default useSearchForm;
