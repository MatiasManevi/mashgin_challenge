import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Cart.scss';
import { Price, Button } from 'components/atoms';
import { CartContainer } from 'containers/Cart.container';

const Cart = ({ currency = 'u$s' }) => {
	const { cartItems, removeFromCart, loadCart } = CartContainer.useContainer();
	let totalAmount = 0;

	useEffect(() => {
		loadCart();
	}, []);

	const renderCart = () => {
		if (!Object.keys(cartItems).length) return <p className="empty">You have not selected any item yet, the cart is empty.</p>;

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
								<p>Quantity: 1</p>
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
				<Button>Confirm & Checkout</Button>
			</>
		)
	};

	return (
		<div className="cart">
			<div className="cart__header">
				<Link to="/">
					<img src="/images/left-arrow.png" alt="back to item list" />
				</Link>
				<h1>Your order</h1>
			</div>
			<div className="cart__content">
				{renderCart()}
			</div>
		</div >
	)
}

export default Cart;
