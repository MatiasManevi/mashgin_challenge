import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {
	const clickHandler = jest.fn();

	it('should match snapshot', () => {
		const wrapper = shallow(<Button onClick={clickHandler} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call clickHandler when clicking', () => {
		const wrapper = shallow(<Button onClick={clickHandler} />);
		wrapper.simulate('click');
		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});
