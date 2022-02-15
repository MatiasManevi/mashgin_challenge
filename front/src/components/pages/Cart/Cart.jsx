import React from 'react';

import './Cart.scss';
import { useCart } from 'components/pages/Cart/hooks';
import { Price, Button } from 'components/atoms';

const Cart = ({ currency = 'u$s' }) => {
	const { cartItems, removeFromCart } = useCart();
	let totalAmount = 0;

	const renderCart = () => {
		if (!cartItems.length) return 'Your cart is empty.';

		return (
			<>
				{cartItems.map((item) => {
					totalAmount += item.price;
					return (
						<div key={item.id} className="cart__item">
							<img src={`/images/${item.image_id}.jpg`} alt={`picture of ${item.name}`} />
							<div>
								<p>{item.name}</p>
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
				<Button>Confirm purchase</Button>
			</>
		)
	};

	return (
		<div className="cart">
			<div className="cart__content">
				<h1>Your order</h1>
				{renderCart()}
			</div>
		</div >
	)
}

export default Cart;
