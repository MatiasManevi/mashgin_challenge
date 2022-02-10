import React from 'react';
import clsx from 'clsx';

import './Price.scss';

const Price = ({ price, currency = 'u$s', small = false }) => {
	return (
		<div className="price">
			<p className={clsx({ small })}>
				{currency} {price}
			</p>
		</div>
	);
};

export default Price;
