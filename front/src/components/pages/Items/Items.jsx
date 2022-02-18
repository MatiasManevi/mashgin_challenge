import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Items.scss';
import { Button } from 'components/atoms';
import { Item, Header } from 'components/organisms';
import { useItems } from './hooks';
import { CartContainer } from 'containers/Cart.container';

const Items = () => {
	const history = useHistory();
	const { items } = useItems();
	const { cartItems, loadCart } = CartContainer.useContainer();
	const [goCart, setGoCart] = useState(false);

	useEffect(() => {
		loadCart();
	}, []);

	useEffect(() => {
		if (cartItems && Object.keys(cartItems).length) {
			setGoCart(true);
		} else {
			setGoCart(false);
		}
	}, [cartItems]);

	return (
		<>
			<Header />
			<div className="items">
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
			{goCart &&
				<Button
					onClick={() => history.push('/cart')}
					color="neutral"
					className="to-cart">
					Go to Cart!
				</Button>}
		</>
	);
};

export default Items;
