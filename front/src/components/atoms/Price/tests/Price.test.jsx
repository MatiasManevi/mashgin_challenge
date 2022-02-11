import React from 'react';
import { shallow } from 'enzyme';

import Price from '../Price';

describe('Price', () => {
	const price = 2000;

	it('should match snapshot', () => {
		const wrapper = shallow(<Price price={price} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should use the right class', () => {
		const wrapper = shallow(<Price price={price} small />);
		expect(wrapper.find('p').props().className).toBe('small');
	});
});
