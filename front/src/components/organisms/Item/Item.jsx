import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Item.scss';
import { Price } from 'components/atoms';

const Item = ({ item }) => {
	return (
		<div className="item">
			<img src={`/images/${item.image_id}.jpg`} alt={`picture of ${item.name}`} />
			<Price price={item.price} />
			<p className="item__title">{item.name}</p>
		</div>
	);
};

export default Item;
