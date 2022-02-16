import React from 'react';

import { CartContainer } from './Cart.container';

// The order here is important. Each provider can inherit from the provider before it
const providers = [
	CartContainer.Provider
];

// eslint-disable-next-line react/display-name
export const ContainerProviders = React.memo(({ children }) => {
	// Put the entire app in the lowest part of the chain
	let current = children;

	// Iteratively build the provider contexts (reversed)
	providers.reverse().forEach((Tag) => {
		current = <Tag>{current}</Tag>;
	});

	return current;
});
