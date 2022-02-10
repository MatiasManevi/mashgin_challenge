import React from 'react';

import './SearchForm.scss';
import { SearchButton, Input } from 'components/atoms';
import { useSearchForm } from 'components/molecules/SearchForm/hooks';

const SearchForm = () => {
	const { handleInputChange, handleSubmit, query } = useSearchForm();

	return (
		<form className="search-form">
			<Input value={query} changeHandler={handleInputChange} placeholder="Search..." />
			<SearchButton clickHandler={handleSubmit} />
		</form>
	);
};

export default SearchForm;
