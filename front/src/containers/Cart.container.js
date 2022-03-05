import { createContainer } from "unstated-next"
import { useState } from 'react';

export const CartContainer = createContainer(() => {
	const [cartItems, setCartItems] = useState({});

	const addToCart = (item) => {
		let cart = JSON.parse(localStorage.getItem('cart')) || {};
		if (!cart[item.id]) {
			cart[item.id] = item;
		}
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
		setCartItems(cart);
	}

	const emptyCart = () => {
		setCartItems({});
		localStorage.removeItem('cart');
	}

	return {
		cartItems,
		getCartItems,
		removeFromCart,
		addToCart,
		loadCart,
		emptyCart
	};
});
