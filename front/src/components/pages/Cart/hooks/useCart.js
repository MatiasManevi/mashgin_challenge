import { useState, useEffect } from 'react';


const useCart = () => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		const cartItems = JSON.parse(localStorage.getItem('cart'));
		if (!cartItems) {
			const cart = {};
			cart[item.id] = item;
			localStorage.setItem('cart', JSON.stringify(cart));
			return;
		}
		cartItems[item.id] = item;
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}

	const removeFromCart = (id) => {
		const cartItems = JSON.parse(localStorage.getItem('cart'));
		if (!cartItems) {
			return;
		}
		delete cartItems[id];
		localStorage.setItem('cart', JSON.stringify(cartItems));
		setCartItems(getCartItems());
	}

	const getCartItems = () => {
		const cartItems = JSON.parse(localStorage.getItem('cart'));
		if (!cartItems) return [];
		return Object.values(cartItems);
	}

	useEffect(() => {
		setCartItems(getCartItems());
	}, []);

	return {
		addToCart,
		removeFromCart,
		cartItems
	};
};

export default useCart;

