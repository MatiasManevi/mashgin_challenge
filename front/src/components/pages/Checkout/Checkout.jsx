import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Checkout.scss';
import { CartContainer } from 'containers/Cart.container';
import { Price, Button, Input } from 'components/atoms';

const Checkout = () => {
	const { getCartItems } = CartContainer.useContainer();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [creditCard, setCreditCard] = useState('');
	const cartItems = getCartItems();
	const total = cartItems.reduce((n, { price }) => n + price, 0);

	return <div className="checkout">
		<header>
			<Link to="/cart">
				<img src="/images/left-arrow.png" alt="back to item list" />
			</Link>
			<h1>Checkout</h1>
		</header>
		<div className="checkout__body">
			<div>
				<h3>Fill payment data</h3>
				<Input placeholder="Name" changeHandler={(e) => setName(e.target.value)} />
				<Input placeholder="Email" changeHandler={(e) => setEmail(e.target.value)} />
				<Input placeholder="Card Number" changeHandler={(e) => setCreditCard(e.target.value)} />
			</div>
			<div>
				<h3>You are going to pay</h3>
				<Price small price={total} />
			</div>
		</div>
		<Button color="secondary">Confirm payment</Button>
	</div>
};

export default Checkout;
