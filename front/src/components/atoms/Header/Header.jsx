import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './Header.scss';

const Header = ({ backTo, title, color = "primary" }) => {
	return <header className={clsx(color)}>
		<Link to={backTo}>
			<img src="/images/left-arrow.png" alt="back" />
		</Link>
		<h1>{title}</h1>
	</header>
};

export default Header;
