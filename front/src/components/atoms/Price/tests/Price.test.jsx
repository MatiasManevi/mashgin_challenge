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
		const wrapper = shallow(<Price price={price} small={true} />);
		expect(wrapper.find('p').props().className).toBe('price--small');
	});

	it('should use shipping icon', () => {
		const wrapper = shallow(<Price price={price} />);
		expect(wrapper.find('img').length).toBe(1);
	});
});
