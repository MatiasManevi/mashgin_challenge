import React from 'react';

import './SearchButton.scss';

const SearchButton = ({ clickHandler }) => {
	return <button className="search-button" onClick={clickHandler}></button>;
};

export default SearchButton;
