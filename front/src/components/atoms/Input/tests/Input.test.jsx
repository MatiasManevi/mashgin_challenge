import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input', () => {
	const changeHandler = jest.fn();
	const value = 'input value';

	it('should match snapshot', () => {
		const wrapper = shallow(
			<Input changeHandler={changeHandler} value={value} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call changeHandler when onChange', () => {
		const event = {
			target: { value }
		};
		const wrapper = shallow(
			<Input changeHandler={changeHandler} value={value} />
		);
		wrapper.simulate('change', event);
		expect(changeHandler).toHaveBeenCalledTimes(1);
		expect(changeHandler).toHaveBeenCalledWith(event);
	});
});
