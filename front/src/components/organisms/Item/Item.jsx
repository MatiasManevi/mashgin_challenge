import React from 'react';

import './Item.scss';
import { Price, Button } from 'components/atoms';

const Item = ({ item }) => {
	return (
		<div className="item">
			<img src={`/images/${item.image_id}.jpg`} alt={`picture of ${item.name}`} />
			<Price price={item.price.toFixed(2)} />
			<p className="item__title">{item.name}</p>
			<Button>Add to Cart</Button>
		</div>
	);
};

export default Item;
