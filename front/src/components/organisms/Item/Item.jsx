import React from 'react';

import './Item.scss';
import { Price, Button } from 'components/atoms';
import { useItem } from 'components/organisms/Item/hooks';

const Item = ({ item }) => {
	const { add, remove, addedToCart } = useItem(item.id);

	return (
		<div className="item">
			<img className="item-picture" src={`/images/${item.image_id}.jpg`} alt={`picture of ${item.name}`} />
			<Price price={item.price} />
			<p className="item__title">{item.name}</p>
			<Button
				color={addedToCart ? "secondary" : "primary"}
				onClick={addedToCart ? () => remove(item.id) : () => add(item)}>
				{addedToCart ?
					<img title="Remove from Cart" src="images/remove-from-cart.png" alt="remove from cart" /> :
					<img title="Add to Cart" src="images/add-to-cart.png" alt="add to cart" />
				}
			</Button>
		</div>
	);
};

export default Item;
