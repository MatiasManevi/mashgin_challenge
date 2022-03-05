import React, { useEffect, useState } from 'react';

import { CartContainer } from 'containers/Cart.container';
import API from 'utils/apiGateway';

const useCheckout = () => {
	const { getCartItems, emptyCart } = CartContainer.useContainer();
	const cartItems = getCartItems();
	const [disableSubmit, setDisableSubmit] = useState(true);
	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [creditCard, setCreditCard] = useState();
	const total = cartItems.length ? cartItems.reduce((n, { price }) => n + price, 0) : 0;

	useEffect(() => {
		if (!email || !name || !creditCard) {
			setDisableSubmit(true);
		} else {
			setDisableSubmit(false);
		}
	}, [email, name, creditCard]);

	const submitOrder = async () => {
		const order = { name, email, creditCard, cartItems, total };
		try {
			await API.createOrder(order);
			setSubmitted(true);
			emptyCart();
		} catch (e) {
			console.error(e);
		}
	}

	return {
		setName,
		setEmail,
		setCreditCard,
		submitOrder,
		total,
		disableSubmit,
		submitted
	};
};

export default useCheckout;
