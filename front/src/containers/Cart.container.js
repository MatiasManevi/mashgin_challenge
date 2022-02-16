import { createContainer } from "unstated-next"
import { useState } from 'react';

export const CartContainer = createContainer(() => {
	const [cartItems, setCartItems] = useState({});

	const addToCart = (item) => {
		let cart = JSON.parse(localStorage.getItem('cart'));
		console.log('old cart', cart)
		if (cart && !cart[item.id]) {
			cart[item.id] = item;
		}
		console.log('new cart', cart)
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartItems(cart);
	}

	const removeFromCart = (id) => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (!cart[id]) return;
		delete cart[id];
		localStorage.setItem('cart', JSON.stringify(cart));
		setCartItems(cart);
	}

	const getCartItems = () => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		if (!cart) return {};
		return Object.values(cart);
	}

	const loadCart = () => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart, 'cart in storage')
		setCartItems(cart);
	}

	return {
		cartItems,
		getCartItems,
		removeFromCart,
		addToCart,
		loadCart
	};
});
