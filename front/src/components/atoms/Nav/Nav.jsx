import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './Nav.scss';

const Nav = ({ backTo, title, color = "primary" }) => {
	return <nav className={clsx(color)}>
		<Link to={backTo}>
			<img src="/images/left-arrow.png" alt="back" />
		</Link>
		<h1>{title}</h1>
	</nav>
};

export default Nav;
