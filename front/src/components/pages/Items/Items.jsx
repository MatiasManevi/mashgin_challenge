import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Items.scss';
import { Item } from 'components/organisms';
import { Content } from 'components/templates';
import { useItems } from './hooks';

const Items = () => {
	const { items } = useItems();

	return (
		// <Content>
		<div className="items">
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
		// </Content>
	);
};

export default Items;
