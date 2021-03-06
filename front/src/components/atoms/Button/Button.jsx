import React from 'react';
import clsx from 'clsx';

import './Button.scss';

const Button = ({ onClick, children, disabled = false, color = "primary", className = '' }) => {
	return <button disabled={disabled} className={clsx(className, color)} onClick={onClick}>{children}</button>;
};

export default Button;
