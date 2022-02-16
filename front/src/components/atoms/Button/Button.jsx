import React from 'react';
import clsx from 'clsx';

import './Button.scss';

const Button = ({ onClick, children, color = "primary", className = '' }) => {
	return <button className={clsx(className, color)} onClick={onClick}>{children}</button>;
};

export default Button;
