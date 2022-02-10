import React from 'react';

import './Input.scss';

const Input = ({ changeHandler, value, placeholder = '' }) => {
	return (
		<input
			onChange={changeHandler}
			className="input"
			type="text"
			value={value}
			placeholder={placeholder}
		/>
	);
};

export default Input;
