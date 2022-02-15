import React from 'react';

import './Items.scss';
import { Item, Header } from 'components/organisms';
import { useItems } from './hooks';

const Items = () => {
	const { items } = useItems();

	return (
		<>
			<Header />
			<div className="items">
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</>
	);
};

export default Items;
