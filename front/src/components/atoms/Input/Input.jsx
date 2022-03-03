import React from 'react';

import './Input.scss';

const Input = ({ changeHandler, value, ref, placeholder = '' }) => {
	return (
		<input
			ref={ref}
			onChange={changeHandler}
			className="input"
			type="text"
			value={value}
			placeholder={placeholder}
		/>
	);
};

export default Input;
