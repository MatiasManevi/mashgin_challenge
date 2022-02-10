import React from 'react';
import { useHistory } from 'react-router-dom';

const useSearchForm = () => {
	const [query, setQuery] = React.useState('');
	const history = useHistory();

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?search=${query}`);
	};

	return {
		handleInputChange,
		handleSubmit,
		query
	};
};

export default useSearchForm;
