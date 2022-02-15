import { useState, useEffect } from 'react';
import { useCart } from 'components/pages/Cart/hooks'

const useItem = (id) => {
	const [addedToCart, setAddedTocart] = useState(false);
	const { addToCart, removeFromCart } = useCart();

	const add = (item) => {
		addToCart(item);
		setAddedTocart(true);
	}

	const remove = (id) => {
		removeFromCart(id);
		setAddedTocart(false);
	}

	useEffect(() => {
		const cartItems = JSON.parse(localStorage.getItem('cart'));
		if (!cartItems) return;
		if (!cartItems[id]) return;
		setAddedTocart(true);
	}, []);

	return {
		add,
		remove,
		addedToCart
	};
};

export default useItem;

