import React from 'react';
import clsx from 'clsx';

import './Button.scss';

const Button = ({ onClick, children, color = "primary" }) => {
	return <button className={clsx(color)} onClick={onClick}>{children}</button>;
};

export default Button;
