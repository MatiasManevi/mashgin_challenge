import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import './Cart.scss';
import { Price, Button, Nav } from 'components/atoms';
import { CartContainer } from 'containers/Cart.container';

const Cart = ({ currency = 'u$s' }) => {
	const history = useHistory();
	const { cartItems, removeFromCart, loadCart } = CartContainer.useContainer();
	let totalAmount = 0;

	useEffect(() => {
		loadCart();
	}, []);

	const renderCart = useMemo(() => {
		if (!cartItems || !Object.keys(cartItems).length) return <p className="empty">You have not selected any item yet, the cart is empty.</p>;

		return (
			<>
				{Object.values(cartItems).map((item) => {
					totalAmount += item.price;
					return (
						<div key={item.id} className="cart__item">
							<img src={`/images/${item.image_id}.jpg`} alt={`picture of ${item.name}`} />
							<div>
								<p className="cart__item__name">{item.name}</p>
								<Price price={item.price} small />
								<img
									onClick={() => removeFromCart(item.id)}
									title="Remove item"
									className="remove"
									src="/images/remove.png"
									alt="remove item"
								/>
							</div>
						</div>
					)
				})}
				<p className="cart__total">Total: {currency} {totalAmount.toFixed(2)}</p>
				<Button onClick={() => history.push('/checkout')}>Confirm & Checkout</Button>
			</>
		)
	}, [cartItems]);

	return (
		<div className="cart">
			<Nav backTo="/" title="Your order" />
			<div className="cart__content">
				{renderCart}
			</div>
		</div >
	)
}

export default Cart;
